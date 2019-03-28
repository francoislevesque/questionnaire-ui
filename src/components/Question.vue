<template>
    <div class="card">
        <div slot="title">Question {{ questionNumber }}</div>
        <b-field :label="questionDisplay">
            <!-- Range answers -->
            <b-select v-if="type === 'RANGE'" :placeholder="trans('select_placeholder')" v-model="answer" :disabled="submitted">
                <option v-for="val in rangeValues" :key="val" :value="val">
                    {{ val }}
                </option>
            </b-select>

            <!-- Date time answers -->
            <div v-if="type === 'DATE_TIME'">
                <b-datepicker :placeholder="trans('date_time_placeholder')" icon="calendar-today" :disabled="submitted" v-model="date" @input="updateDateTimeAnswer"></b-datepicker>
                <b-timepicker :placeholder="trans('date_time_placeholder')" :editable="true" icon="clock" :disabled="submitted" :hour-format="format" v-model="time" @input="updateDateTimeAnswer"></b-timepicker>
                <b-field>
                    <b-switch v-model="formatAmPm" :disabled="submitted">AM/PM</b-switch>
                </b-field>
            </div>

            <!-- Text answers -->
            <b-input v-if="type === 'TEXT'" type="text" v-model="answer" :disabled="submitted"></b-input>

            <!-- Choice answers -->
            <b-select v-if="type === 'SELECT'" :placeholder="trans('select_placeholder')" v-model="choice" @input="selectAnswer" :disabled="submitted">
                <option v-for="child in children" :key="child.next_question_id" :value="{answerId: child.id, nextQuestionId: child.next_question_id, trans: child.translation}">
                    {{ child.translation[lang].choice }}
                </option>
            </b-select>
        </b-field>
        <div slot="buttons">
            <button role="button" class="button is-primary" v-if="!submitted" :disabled="answer === null || answer === ''" @click="submitAnswer">{{ trans('next_button') }}</button>
            <button role="button" class="button" v-if="submitted" @click="askChangeAnswer">{{ trans('edit_button') }}</button>
        </div>
    </div>
</template>

<script>
import trans from './trans.js'
import { Field } from 'buefy/dist/components/field'
import { Input } from 'buefy/dist/components/input'
import { Select } from 'buefy/dist/components/select'
import { Timepicker } from 'buefy/dist/components/timepicker'
import { Datepicker } from 'buefy/dist/components/datepicker'
import { Switch } from 'buefy/dist/components/switch'
import { Dialog } from 'buefy/dist/components/dialog'

export default {
    components: {
        'b-field': Field,
        'b-input': Input,
        'b-select': Select,
        'b-timepicker': Timepicker,
        'b-datepicker': Datepicker,
        'b-switch': Switch
    },
    props: {
        lang: {
            required: true,
            type: String
        },
        questions_array_length: {
            required: true,
            type: Number
        },
        single_question: {
            required: true,
            type: Object
        }
    },
    data() {
        return {
            answer: null,
            answerFr: null,
            answerId: null,
            children: [],
            choice: null,
            choices: [],
            date: null,
            time: null,
            formatAmPm: false,
            nextQuestionId: null,
            question: null,
            questionDisplay: null,
            questionFr: null,
            questionId: null,
            questionNumber: null,
            rangeValues: [],
            submitted: false,
            type: null
        }
    },
    created() {
        console.log(Dialog)      
        this.question = this.single_question.question;
        this.questionFr = this.single_question.translation.fr.question;

        this.questionDisplay = this.question;
        if (this.lang === 'fr') {
            this.questionDisplay = this.questionFr;
        }

        this.questionNumber = this.questions_array_length;
        this.questionId = this.single_question.id;
        this.type = this.single_question.question_type_name;

        this.children = this.single_question.childrens;
        if (this.children.length === 1) {
            let child = this.children[0];
            this.nextQuestionId = child.next_question_id;
            this.answerId = child.id;

            if (this.type === 'RANGE') {
                for (let i = child.from; i <= child.to; i += child.jump_by) {
                    this.rangeValues.push(i);
                }
            }
        }
    },
    computed: {
        format() {
            return this.formatAmPm ? '12' : '24';
        }
    },
    methods: {
        askChangeAnswer(event) {
            Dialog.confirm({
                title: this.trans('dialog_title'),
                message: this.trans('dialog_message'),
                cancelText: this.trans('dialog_cancel'),
                confirmText: this.trans('dialog_confirm'),
                type: 'is-danger',
                onConfirm: () => this.changeAnswer()
            });
        },
        changeAnswer() {
            this.$emit('ask-edit', {id: this.questionId});
            this.submitted = false;
        },
        formatDate() {
            let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
            let date = this.date.getDate();
            if (date < 10) {
                date = `0${date}`;
            }

            return this.date.getFullYear() + '-' + months[this.date.getMonth()] + '-' + date;
        },
        formatTime() {
            let hours = this.time.getHours();
            if (hours < 10) {
                hours = `0${hours}`;
            }

            let minutes = this.time.getMinutes();
            if (minutes < 10) {
                minutes = `0${minutes}`;
            }

            let seconds = this.time.getSeconds();
            if (seconds < 10) {
                seconds = `0${seconds}`;
            }

            return hours + ':' + minutes + ':' + seconds;
        },
        selectAnswer(event) {
            this.nextQuestionId = this.choice.nextQuestionId;
            this.answerId = this.choice.answerId;

            this.answer = this.choice.trans.en.choice;
            this.answerFr = this.choice.trans.fr.choice;
        },
        submitAnswer(event) {
            this.$emit('answered', {
                answer: this.answer,
                answerFr: this.answerFr,
                answerId: this.answerId,
                nextQuestion: this.nextQuestionId,
                question: this.question,
                questionFr: this.questionFr,
                questionType: this.type
            });
            this.submitted = true;
        },
        trans(key) {
            return trans[this.lang][key];
        },
        updateDateTimeAnswer(event) {
            if (this.date === null || this.time === null) {
                return;
            }

            this.answer = this.formatDate() + ' ' + this.formatTime();
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
    padding: 1rem;
    background-color: #fff;
}
</style>
