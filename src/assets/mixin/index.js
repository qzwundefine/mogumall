import MallSearch from 'components/common/MallSearch'
import QuickNav from 'components/common/quicknav/QuickNav'
import LaunchBanner from 'components/content/LaunchBanner'

export const mallSearch = {
  components: {
    MallSearch,
  },
  computed: {
    getSearch() {
      return this.$store.state.isSearch;
    }
  }
}

export const quickNav = {
  components: {
    QuickNav
  }
}

export const launchBanner = {
  components: {
    LaunchBanner
  }
}