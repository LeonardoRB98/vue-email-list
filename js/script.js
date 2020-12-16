var app = new Vue({
  el: '#container',
  data: {
    emails: [],
  },
  mounted: function() {
    const self = this;
    for (var i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function (result) {
        self.emails.push(result.data.response)
      });
    }
  }

})
