<template>
    <div class="questionnaire">
        <div v-for="question in questions" :key="question.id">
            <single-question
                @answered="retrieveAnswer"
                @ask-edit="editQuestion"
                :single_question="question"
                :lang="lang"
                :questions_array_length="questions.length">
            </single-question>
        </div>
        <button class="button is-primary" v-if="isDone" @click="submitQuestionnaire">{{ trans('submit_button') }}</button>
    </div>
</template>

<script>
import axios from 'axios'
import question from './Question.vue'
import trans from './trans.js'

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
        }
    },
    data() {
        return {
            answers: [],
            isDone: false,
            questions: [],
            serviceType: null
        }
    },
    created() {
        let config = {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }

        axios.get(this.$laravel.helpmee.questionnaireApi + '/first-question?service_type_name=plomberie', config)
        .then(response => {
            this.questions.push(response.data);
        })
        .catch(error => { });
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
            axios.get(this.$laravel.helpmee.questionnaireApi + `/question?id=${questionId}`)
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
            console.log(answer);
        },
        trans(key) {
            return trans[this.lang][key];
        }
    }
}
</script>
