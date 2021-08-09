<template>
	<div :class="'timeline-card card shadow-sm timeline-card-' + settings.color.value">
		<div class="card-body">
			<div :class="'h5 mb-1 ' + settings.position.class" :style="settings.position.styles">
				{{settings.position.value}}
				<span class="text-muted h6">
					at
					<a v-if="settings.link.value" :href="settings.link.value" :class="settings.link.class" :style="'text-decoration: none; ' + settings.link.styles" :target="settings.link.target">{{settings.place.value}}</a>
					<span v-else :class="settings.link.class" :style="'text-decoration: none; ' + settings.link.styles">{{settings.place.value}}</span>
				</span>
			</div>
			<div class="text-muted text-small mb-2"><span :class="settings.startDate.class" :style="settings.startDate.styles">{{startDateComputed}}</span> -
				<span :class="settings.endDate.calss" :style="settings.endDate.styles">{{endDateComputed}}</span> ,
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
     return !this.settings.startDate.value ? 'Present' : `${MONTHNAMES[this.settings.startDate.value.split('/')[0]]}, ${this.settings.startDate.value.split('/')[2]}`
    },
    endDateComputed() {
     return !this.settings.endDate.value ? 'Present' :  `${MONTHNAMES[this.settings.startDate.value.split('/')[0]]}, ${this.settings.startDate.value.split('/')[2]}`
     },
     timeTillNow() {
        let dateToday = new Date(new Date().toLocaleDateString())
        let startDate = new Date(this.settings.startDate.value)
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
  mehods: {
    currentDate() {
      currentDateObj = {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate() - 1,
      }
      return `${year}/${month}/${day}`
    },
    getDateBetween(startDate, endDate) {
      let startMonth = startDate.split('/')[0]
      let startYear = startDate.split('/')[2]
      let endMonth = endDate.split('/')[0]
      let endYear = endDate.split('/')[2]
    },
  }
}
</script>

<style>
@import '../assets/css/portfolio-styles/card.css';
</style>