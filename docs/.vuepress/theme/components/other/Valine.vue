<template>
  <div class="valine-wrapper">
    <div id="valine"></div>
  </div>
</template>

<script>

export default {
  name: 'Valine',
  props: {
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted: function () {
    this.initValine()
  },
  methods: {
    initValine () {
      const Valine = require('valine')
      const AV = require('leancloud-storage')
      const valineOptions = {
        el: '#valine',
        placeholder: 'just go go',
        notify: false,
        verify: false,
        avatar: 'retro',
        visitor: true,
        recordIP: false,
        path: window.location.pathname,
        ...this.options
      }

      console.log(valineOptions, 'valineOptions');

      if (typeof window !== 'undefined') {
        this.window = window
        window.AV = AV
      }

      new Valine(valineOptions)
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path !== from.path) {
        // 切换页面时刷新评论
        // this.$router.go(0)
        setTimeout(() => {
          this.initValine()
        }, 300)
      }
    }
  }
}
</script>

<style lang="stylus">
.valine-wrapper
  #valine.v
    .vbtn
      color: #2c3e50
      color: var(--text-color)
      border: 1px solid #eaecef
      border-color var(--border-color)
      &:hover
        color: $accentColor
        border-color: $accentColor
    .vwrap
      background: rgba(27, 31, 35, 0.05)
      background: var(--code-color)
      border: 1px dashed #eaecef
      border-color var(--border-color)
      .vcontrol
        .vsubmit
          background: rgba(27, 31, 35, 0.05)
          background: var(--code-color)
      .vheader .vinput
        border: 1px dashed #eaecef
        border-color var(--border-color)
    .vinfo
      padding-left: .6rem
    .vlist
      padding: 0 .6rem
      border-radius: .25rem
      .vcard
        .vquote
          margin-left: 0
          border-left: 1px dashed #eaecef
          border-color var(--border-color)
        .vimg
          width: 2.8rem;
          height: 2.8rem;
          border-radius: .25rem
          border: none
      .vh
        border-bottom: none
        .vhead
          .vsys
            color: $accentColor
            color: var(--text-color)
            background: rgba(27, 31, 35, 0.05)
            background: var(--code-color)
        .vmeta
          margin-bottom: 1rem
          .vat
            background: rgba(27, 31, 35, 0.05)
            background: var(--code-color)
            border-radius: .25rem
            padding: 0 .4rem
            color: var(--text-color)
            border: 1px solid #eaecef
            border-color var(--border-color)
            &:hover
              color: $accentColor
              border-color: $accentColor
        .vcontent
          background: rgba(27, 31, 35, 0.05)
          background: var(--code-color)
          border-radius: .25rem
          padding: .1rem .6rem .05rem .6rem
          p .at
            color: #1abc9c
          a:hover
            color: #1abc9c
          &.expand:before
            z-index 1
            background: linear-gradient(180deg, rgba(255, 255, 255, 0), #fff)
            background: linear-gradient(180deg, rgba(255, 255, 255, 0), var(--background-color))
          &.expand:after
            color: $accentColor
            color: var(--text-color)
            background: #fff
            background: var(--background-color)
    .info
      padding-right: .6rem
    code, pre, .vbtn
      background var(--background-color)
      color var(--text-color)
    pre
      margin .25rem 0
</style>
