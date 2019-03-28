<template>
    <div class="q-questionnaire">
        <single-question
            v-for="question in questions" :key="question.id"
            @answered="retrieveAnswer"
            @ask-edit="editQuestion"
            :single_question="question"
            :lang="lang"
            :questions_array_length="questions.length">
        </single-question>

        <div class="q-card" v-if="isDone">
            <h3 class="title is-6">Demande complétée. Appuyer sur le bouton ci-dessous pour envoyer votre demande.</h3>
            <button type="button" class="button is-primary" @click="submitQuestionnaire">{{ trans('submit_button') }}</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import question from './Question.vue'
import trans from './trans.js'
import config from '../config'

export default {
    components: {'single-question': question},
    props: {
        lang: {
            required: false,
            type: String,
            default: 'fr',
            validator: function(value) {
                return ['fr', 'en'].indexOf(value) !== -1;
            }
        },
        serviceType: {
            required: true,
            type: String
        }
    },
    data() {
        return {
            answers: [],
            isDone: false,
            questions: []
        }
    },
    created() {
        axios.get(config.url + '/first-question?service_type_name=' + this.serviceType, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => {
            this.questions.push(response.data);
        })
        .catch(error => {
            this.$emit('error', error)
        });
    },
    methods: {
        editQuestion(payload) {
            for (let i = 0; i < this.questions.length; i++) {
                const question = this.questions[i];
                if (question.id === payload.id) {
                    let index = i + 1;
                    this.questions.splice(index, this.questions.length - index);
                    this.answers.splice(i, this.answers.length - i);
                    return;
                }
            }
        },
        nextQuestion(questionId) {
            axios.get(config.url + `/question?id=${questionId}`)
            .then(response => {
                this.questions.push(response.data);
            })
            .catch(error => { });
        },
        retrieveAnswer(payload) {
            let item = {
                answer: payload.answer,
                answerFr: payload.answerFr,
                answerId: payload.answerId,
                question: payload.question,
                questionFr: payload.questionFr,
                questionType: payload.questionType
            }
            this.answers.push(item);

            if (payload.nextQuestion !== null) {
                this.nextQuestion(payload.nextQuestion);
            } else {
                let answers = [];

                this.answers.forEach(element => {
                    let answer = {
                        id: element.answerId,
                        type: element.questionType
                    }
                    answers.push(answer);
                });

                // TODO: axios.get(...)

                this.isDone = true;
            }
        },
        submitQuestionnaire(event) {
            let answer = '';
            let questionNumber = 1;

            this.answers.forEach(element => {
                let answerFr = element.answer;
                if (element.answerFr !== null) {
                    answerFr = element.answerFr;
                }
                answer += `Question ${questionNumber}\n` + element.question + ' : ' + element.answer + '\n' + element.questionFr + ' : ' + answerFr + '\n';
                questionNumber++;
            });

            this.$emit('done', {answer: answer});
        },
        trans(key) {
            return trans[this.lang][key];
        }
    }
}
</script>

<style lang="scss">
.q-questionnaire {
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    background-color: #fff;
}
.q-card {
    border-bottom: 1px solid #e1e1e1;
    padding: 1rem;

    &:last-child {
        border-bottom: none;
    }
}
.inputs {
    display: flex;
    flex-wrap: wrap;

    & > * {
        margin-right: 5px;
        margin-bottom: 5px;
    }
}
.mb-5 {
    margin-bottom: 5px;
}
.mr-5 {
    margin-right: 5px;
}
</style>