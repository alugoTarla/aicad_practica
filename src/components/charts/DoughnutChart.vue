
<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    htmlLegend: null
  }),
  mounted () {
    this.renderChart(this.chartdata, this.options);
    this.htmlLegend = this.generateLegend();
      console.log(this.htmlLegend);
  }
}
</script>

<style>
</style>