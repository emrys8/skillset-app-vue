$(function () {

    Vue.use(VeeValidate);
    var app = new Vue({
        el: '#app',
        data: {
            name: 'Skills',
            skill_name: '',
            my_skills: [
                'HTML',
                'CSS',
                'JavaScript',
                'jQuery',
                'React',
                'Vue.js'
            ],

            someClass: false,
            inputType: 'text',

            formField: {
                alert: true
            }
        },

        methods: {
            addSkill: function () {
                
                // var skill = $("input").val();
                this.$validator.validateAll()
                .then((result) => {
                    if (result) {
                        this.my_skills.push(this.skill_name);
                        this.skill_name = '';
                    } else {

                    }
                })
            },

            removeSkill: function (e) {

                var $btn = $(e.target);
                var elText = $btn.parent('li').text();

                // console.log(elText.split("\n")[0]);
                var skill = elText.split("\n")[0];
                var indexSkill = this.my_skills.indexOf(skill)

                this.my_skills.splice(indexSkill, 1);
            }
        },
    });
});