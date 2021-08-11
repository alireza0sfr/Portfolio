<template>
	<div :class="'timeline-card card shadow-sm timeline-card-' + settings.color.value">
		<div class="card-body">
			<div :class="'h5 mb-1 ' + settings.position.class" :style="settings.position.styles">
				{{settings.position.value}}
				<span class="text-muted h6">
					<span v-if="settings.color.value == 'primary'">at </span><span v-else>from </span>
					<a v-if="settings.link.value" :href="settings.link.value" :class="settings.link.class" :style="'text-decoration: none; ' + settings.link.styles" :target="settings.link.target">{{settings.place.value}}</a>
					<span v-else :class="settings.link.class" :style="'text-decoration: none; ' + settings.link.styles">{{settings.place.value}}</span>
				</span>
			</div>
			<div class="text-muted text-small mb-2"><span :class="settings.startDate.class" :style="settings.startDate.styles">{{startDateComputed}}</span> -
				<span :class="settings.endDate.calss" :style="settings.endDate.styles">{{endDateComputed}}</span><span style="font-weight: bold"> &middot; </span>
				<span>{{timeTillNow}}</span> |
				<span :class="settings.type.class" :style="settings.type.styles">{{settings.type.value}}</span>
			</div>
			<div :style="settings.description.style" :class="settings.description.class">
				{{settings.description.value}}
			</div>
		</div>
	</div>
</template>

<script>

const MONTHNAMES = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ]

export default {
  name: 'Card',
  props: {
    options: {}
  },
  mounted() {
    Object.assign(this.settings, this.options)
    
  },
  computed: {
    startDateComputed() {

      if(this.settings.color.value == 'success') {
        return this.options.startDate.value.split('/')[2]
      }

      return this.options.startDate.value == 'Present' ? 'Present' : `${MONTHNAMES[this.options.startDate.value.split('/')[0]]}, ${this.options.startDate.value.split('/')[2]}`
    },
    endDateComputed() {

      if(this.settings.color.value == 'success') {
      return this.options.endDate.value.split('/')[2]
    }

      return this.options.endDate.value == 'Present' ? 'Present' :  `${MONTHNAMES[this.options.endDate.value.split('/')[0]]}, ${this.options.endDate.value.split('/')[2]}`
     },
     timeTillNow() {
      return this.getDateBetween(this.settings.startDate.value, this.settings.endDate.value)
    },
  },
  data() {
    return {
    settings: {
        position: {
            value: 'Position',
            styles: '',
            class: ''
          },
        place: {
            value: 'Place',
            styles: '',
            class: ''
          },
        link: {
            value: '',
            target: '_blank' 
          },
        startDate: {
            value: null,
            styles: '',
            class: '' 
          },
        endDate: {
            value: null,
            styles: '',
            class: ''
          },
        type: {
            value: 'Full-Time',
            styles: '',
            class: ''
        },
        description: {
            value: 'Description',
            styles: '',
            class: ''
        },
        color: {
          value: 'primary'
        }
    }
    }
  },
  methods: {
    currentDate() {
      let year = new Date().getFullYear()
      let month = new Date().getMonth()
      let day =  new Date().getDate() - 1
      return `${year}/${month}/${day}`
    },
    getDateBetween(startDate, endDate) {

      startDate = startDate == 'Present' ? this.currentDate() : startDate
      endDate = endDate == 'Present' ? this.currentDate() : endDate
      var date1 = new Date(startDate).getTime();
      var date2 = new Date(endDate).getTime();
      const diffTime = Math.abs(date2 - date1);
      let totalMonthDiff = diffTime / (3600 * 1000 * 24 * 30)
      let diffYear
      let diffMonth

      if(12 > totalMonthDiff >= 0) {
        diffYear = ''
        diffMonth = Math.floor(totalMonthDiff)
      } else {
        diffYear = Math.floor(totalMonthDiff / 12)
        diffMonth = diffMonth - (12 * diffYear)
      }
        
      if(diffMonth == 1) {
        diffMonth = diffMonth + ' mo'
      } else if(diffMonth > 1) {
        diffMonth = diffMonth + ' mos'
      } else {
        diffMonth = ''
      }

      if(diffYear == 1) {
        diffMonth = diffYear + ' yr'
      } else if(diffYear > 1) {
        diffYear = diffYear + ' yrs'
      } else {
        diffYear = ''
      }

      return diffYear + diffMonth
    },
  }
}
</script>

<style>
@import '../assets/css/portfolio-styles/card.css';
</style>