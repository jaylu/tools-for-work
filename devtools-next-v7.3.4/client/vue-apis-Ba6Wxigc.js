const i = [
  {
    id: "doc:application:createApp()",
    title: "createApp()",
    description: "application",
    url: "https:/vuejs.org/api/application#createapp"
  },
  {
    id: "doc:application:createSSRApp()",
    title: "createSSRApp()",
    description: "application",
    url: "https:/vuejs.org/api/application#createssrapp"
  },
  {
    id: "doc:application:app.mount()",
    title: "app.mount()",
    description: "application",
    url: "https:/vuejs.org/api/application#app-mount"
  },
  {
    id: "doc:application:app.unmount()",
    title: "app.unmount()",
    description: "application",
    url: "https:/vuejs.org/api/application#app-unmount"
  },
  {
    id: "doc:application:app.component()",
    title: "app.component()",
    description: "application",
    url: "https:/vuejs.org/api/application#app-component"
  },
  {
    id: "doc:application:app.directive()",
    title: "app.directive()",
    description: "application",
    url: "https:/vuejs.org/api/application#app-directive"
  },
  {
    id: "doc:application:app.use()",
    title: "app.use()",
    description: "application",
    url: "https:/vuejs.org/api/application#app-use"
  },
  {
    id: "doc:application:app.mixin()",
    title: "app.mixin()",
    description: "application",
    url: "https:/vuejs.org/api/application#app-mixin"
  },
  {
    id: "doc:application:app.provide()",
    title: "app.provide()",
    description: "application",
    url: "https:/vuejs.org/api/application#app-provide"
  },
  {
    id: "doc:application:app.runWithContext()",
    title: "app.runWithContext()",
    description: "application",
    url: "https:/vuejs.org/api/application#app-runwithcontext"
  },
  {
    id: "doc:application:app.version",
    title: "app.version",
    description: "application",
    url: "https:/vuejs.org/api/application#app-version"
  },
  {
    id: "doc:application:app.config",
    title: "app.config",
    description: "application",
    url: "https:/vuejs.org/api/application#app-config"
  },
  {
    id: "doc:application:app.config.errorHandler",
    title: "app.config.errorHandler",
    description: "application",
    url: "https:/vuejs.org/api/application#app-config-errorhandler"
  },
  {
    id: "doc:application:app.config.warnHandler",
    title: "app.config.warnHandler",
    description: "application",
    url: "https:/vuejs.org/api/application#app-config-warnhandler"
  },
  {
    id: "doc:application:app.config.performance",
    title: "app.config.performance",
    description: "application",
    url: "https:/vuejs.org/api/application#app-config-performance"
  },
  {
    id: "doc:application:app.config.compilerOptions",
    title: "app.config.compilerOptions",
    description: "application",
    url: "https:/vuejs.org/api/application#app-config-compileroptions"
  },
  {
    id: "doc:application:app.config.globalProperties",
    title: "app.config.globalProperties",
    description: "application",
    url: "https:/vuejs.org/api/application#app-config-globalproperties"
  },
  {
    id: "doc:application:app.config.optionMergeStrategies",
    title: "app.config.optionMergeStrategies",
    description: "application",
    url: "https:/vuejs.org/api/application#app-config-optionmergestrategies"
  },
  {
    id: "doc:built-in-components:<Transition>",
    title: "<Transition>",
    description: "built-in-components",
    url: "https:/vuejs.org/api/built-in-components#transition"
  },
  {
    id: "doc:built-in-components:<TransitionGroup>",
    title: "<TransitionGroup>",
    description: "built-in-components",
    url: "https:/vuejs.org/api/built-in-components#transitiongroup"
  },
  {
    id: "doc:built-in-components:<KeepAlive>",
    title: "<KeepAlive>",
    description: "built-in-components",
    url: "https:/vuejs.org/api/built-in-components#keepalive"
  },
  {
    id: "doc:built-in-components:<Teleport>",
    title: "<Teleport>",
    description: "built-in-components",
    url: "https:/vuejs.org/api/built-in-components#teleport"
  },
  {
    id: "doc:built-in-components:<Suspense>",
    title: "<Suspense>",
    description: "built-in-components",
    url: "https:/vuejs.org/api/built-in-components#suspense"
  },
  {
    id: "doc:built-in-directives:v-text",
    title: "v-text",
    description: "built-in-directives",
    url: "https:/vuejs.org/api/built-in-directives#v-text"
  },
  {
    id: "doc:built-in-directives:v-html",
    title: "v-html",
    description: "built-in-directives",
    url: "https:/vuejs.org/api/built-in-directives#v-html"
  },
  {
    id: "doc:built-in-directives:v-show",
    title: "v-show",
    description: "built-in-directives",
    url: "https:/vuejs.org/api/built-in-directives#v-show"
  },
  {
    id: "doc:built-in-directives:v-if",
    title: "v-if",
    description: "built-in-directives",
    url: "https:/vuejs.org/api/built-in-directives#v-if"
  },
  {
    id: "doc:built-in-directives:v-else",
    title: "v-else",
    description: "built-in-directives",
    url: "https:/vuejs.org/api/built-in-directives#v-else"
  },
  {
    id: "doc:built-in-directives:v-else-if",
    title: "v-else-if",
    description: "built-in-directives",
    url: "https:/vuejs.org/api/built-in-directives#v-else-if"
  },
  {
    id: "doc:built-in-directives:v-for",
    title: "v-for",
    description: "built-in-directives",
    url: "https:/vuejs.org/api/built-in-directives#v-for"
  },
  {
    id: "doc:built-in-directives:v-on",
    title: "v-on",
    description: "built-in-directives",
    url: "https:/vuejs.org/api/built-in-directives#v-on"
  },
  {
    id: "doc:built-in-directives:v-bind",
    title: "v-bind",
    description: "built-in-directives",
    url: "https:/vuejs.org/api/built-in-directives#v-bind"
  },
  {
    id: "doc:built-in-directives:v-model",
    title: "v-model",
    description: "built-in-directives",
    url: "https:/vuejs.org/api/built-in-directives#v-model"
  },
  {
    id: "doc:built-in-directives:v-slot",
    title: "v-slot",
    description: "built-in-directives",
    url: "https:/vuejs.org/api/built-in-directives#v-slot"
  },
  {
    id: "doc:built-in-directives:v-pre",
    title: "v-pre",
    description: "built-in-directives",
    url: "https:/vuejs.org/api/built-in-directives#v-pre"
  },
  {
    id: "doc:built-in-directives:v-once",
    title: "v-once",
    description: "built-in-directives",
    url: "https:/vuejs.org/api/built-in-directives#v-once"
  },
  {
    id: "doc:built-in-directives:v-memo",
    title: "v-memo",
    description: "built-in-directives",
    url: "https:/vuejs.org/api/built-in-directives#v-memo"
  },
  {
    id: "doc:built-in-directives:v-cloak",
    title: "v-cloak",
    description: "built-in-directives",
    url: "https:/vuejs.org/api/built-in-directives#v-cloak"
  },
  {
    id: "doc:built-in-special-attributes:key",
    title: "key",
    description: "built-in-special-attributes",
    url: "https:/vuejs.org/api/built-in-special-attributes#key"
  },
  {
    id: "doc:built-in-special-attributes:ref",
    title: "ref",
    description: "built-in-special-attributes",
    url: "https:/vuejs.org/api/built-in-special-attributes#ref"
  },
  {
    id: "doc:built-in-special-attributes:is",
    title: "is",
    description: "built-in-special-attributes",
    url: "https:/vuejs.org/api/built-in-special-attributes#is"
  },
  {
    id: "doc:built-in-special-elements:<component>",
    title: "<component>",
    description: "built-in-special-elements",
    url: "https:/vuejs.org/api/built-in-special-elements#component"
  },
  {
    id: "doc:built-in-special-elements:<slot>",
    title: "<slot>",
    description: "built-in-special-elements",
    url: "https:/vuejs.org/api/built-in-special-elements#slot"
  },
  {
    id: "doc:built-in-special-elements:<template>",
    title: "<template>",
    description: "built-in-special-elements",
    url: "https:/vuejs.org/api/built-in-special-elements#template"
  },
  {
    id: "doc:compile-time-flags:__VUE_OPTIONS_API__",
    title: "__VUE_OPTIONS_API__",
    description: "compile-time-flags",
    url: "https:/vuejs.org/api/compile-time-flags#VUE_OPTIONS_API"
  },
  {
    id: "doc:compile-time-flags:__VUE_PROD_DEVTOOLS__",
    title: "__VUE_PROD_DEVTOOLS__",
    description: "compile-time-flags",
    url: "https:/vuejs.org/api/compile-time-flags#VUE_PROD_DEVTOOLS"
  },
  {
    id: "doc:compile-time-flags:__VUE_PROD_HYDRATION_MISMATCH_DETAILS__",
    title: "__VUE_PROD_HYDRATION_MISMATCH_DETAILS__",
    description: "compile-time-flags",
    url: "https:/vuejs.org/api/compile-time-flags#VUE_PROD_HYDRATION_MISMATCH_DETAILS"
  },
  null,
  {
    id: "doc:component-instance:$data",
    title: "$data",
    description: "component-instance",
    url: "https:/vuejs.org/api/component-instance#data"
  },
  {
    id: "doc:component-instance:$props",
    title: "$props",
    description: "component-instance",
    url: "https:/vuejs.org/api/component-instance#props"
  },
  {
    id: "doc:component-instance:$el",
    title: "$el",
    description: "component-instance",
    url: "https:/vuejs.org/api/component-instance#el"
  },
  {
    id: "doc:component-instance:$options",
    title: "$options",
    description: "component-instance",
    url: "https:/vuejs.org/api/component-instance#options"
  },
  {
    id: "doc:component-instance:$parent",
    title: "$parent",
    description: "component-instance",
    url: "https:/vuejs.org/api/component-instance#parent"
  },
  {
    id: "doc:component-instance:$root",
    title: "$root",
    description: "component-instance",
    url: "https:/vuejs.org/api/component-instance#root"
  },
  {
    id: "doc:component-instance:$slots",
    title: "$slots",
    description: "component-instance",
    url: "https:/vuejs.org/api/component-instance#slots"
  },
  {
    id: "doc:component-instance:$refs",
    title: "$refs",
    description: "component-instance",
    url: "https:/vuejs.org/api/component-instance#refs"
  },
  {
    id: "doc:component-instance:$attrs",
    title: "$attrs",
    description: "component-instance",
    url: "https:/vuejs.org/api/component-instance#attrs"
  },
  {
    id: "doc:component-instance:$watch()",
    title: "$watch()",
    description: "component-instance",
    url: "https:/vuejs.org/api/component-instance#watch"
  },
  {
    id: "doc:component-instance:$emit()",
    title: "$emit()",
    description: "component-instance",
    url: "https:/vuejs.org/api/component-instance#emit"
  },
  {
    id: "doc:component-instance:$forceUpdate()",
    title: "$forceUpdate()",
    description: "component-instance",
    url: "https:/vuejs.org/api/component-instance#forceupdate"
  },
  {
    id: "doc:component-instance:$nextTick()",
    title: "$nextTick()",
    description: "component-instance",
    url: "https:/vuejs.org/api/component-instance#nexttick"
  },
  {
    id: "doc:composition-api-dependency-injection:provide()",
    title: "provide()",
    description: "composition-api-dependency-injection",
    url: "https:/vuejs.org/api/composition-api-dependency-injection#provide"
  },
  {
    id: "doc:composition-api-dependency-injection:inject()",
    title: "inject()",
    description: "composition-api-dependency-injection",
    url: "https:/vuejs.org/api/composition-api-dependency-injection#inject"
  },
  {
    id: "doc:composition-api-dependency-injection:hasInjectionContext()",
    title: "hasInjectionContext()",
    description: "composition-api-dependency-injection",
    url: "https:/vuejs.org/api/composition-api-dependency-injection#has-injection-context"
  },
  {
    id: "doc:composition-api-lifecycle:onMounted()",
    title: "onMounted()",
    description: "composition-api-lifecycle",
    url: "https:/vuejs.org/api/composition-api-lifecycle#onmounted"
  },
  {
    id: "doc:composition-api-lifecycle:onUpdated()",
    title: "onUpdated()",
    description: "composition-api-lifecycle",
    url: "https:/vuejs.org/api/composition-api-lifecycle#onupdated"
  },
  {
    id: "doc:composition-api-lifecycle:onUnmounted()",
    title: "onUnmounted()",
    description: "composition-api-lifecycle",
    url: "https:/vuejs.org/api/composition-api-lifecycle#onunmounted"
  },
  {
    id: "doc:composition-api-lifecycle:onBeforeMount()",
    title: "onBeforeMount()",
    description: "composition-api-lifecycle",
    url: "https:/vuejs.org/api/composition-api-lifecycle#onbeforemount"
  },
  {
    id: "doc:composition-api-lifecycle:onBeforeUpdate()",
    title: "onBeforeUpdate()",
    description: "composition-api-lifecycle",
    url: "https:/vuejs.org/api/composition-api-lifecycle#onbeforeupdate"
  },
  {
    id: "doc:composition-api-lifecycle:onBeforeUnmount()",
    title: "onBeforeUnmount()",
    description: "composition-api-lifecycle",
    url: "https:/vuejs.org/api/composition-api-lifecycle#onbeforeunmount"
  },
  {
    id: "doc:composition-api-lifecycle:onErrorCaptured()",
    title: "onErrorCaptured()",
    description: "composition-api-lifecycle",
    url: "https:/vuejs.org/api/composition-api-lifecycle#onerrorcaptured"
  },
  {
    id: "doc:composition-api-lifecycle:onRenderTracked()",
    title: "onRenderTracked()",
    description: "composition-api-lifecycle",
    url: "https:/vuejs.org/api/composition-api-lifecycle#onrendertracked"
  },
  {
    id: "doc:composition-api-lifecycle:onRenderTriggered()",
    title: "onRenderTriggered()",
    description: "composition-api-lifecycle",
    url: "https:/vuejs.org/api/composition-api-lifecycle#onrendertriggered"
  },
  {
    id: "doc:composition-api-lifecycle:onActivated()",
    title: "onActivated()",
    description: "composition-api-lifecycle",
    url: "https:/vuejs.org/api/composition-api-lifecycle#onactivated"
  },
  {
    id: "doc:composition-api-lifecycle:onDeactivated()",
    title: "onDeactivated()",
    description: "composition-api-lifecycle",
    url: "https:/vuejs.org/api/composition-api-lifecycle#ondeactivated"
  },
  {
    id: "doc:composition-api-lifecycle:onServerPrefetch()",
    title: "onServerPrefetch()",
    description: "composition-api-lifecycle",
    url: "https:/vuejs.org/api/composition-api-lifecycle#onserverprefetch"
  },
  {
    id: "doc:composition-api-setup:Basic Usage",
    title: "Basic Usage",
    description: "composition-api-setup",
    url: "https:/vuejs.org/api/composition-api-setup#basic-usage"
  },
  {
    id: "doc:composition-api-setup:Accessing Props",
    title: "Accessing Props",
    description: "composition-api-setup",
    url: "https:/vuejs.org/api/composition-api-setup#accessing-props"
  },
  {
    id: "doc:composition-api-setup:Setup Context",
    title: "Setup Context",
    description: "composition-api-setup",
    url: "https:/vuejs.org/api/composition-api-setup#setup-context"
  },
  {
    id: "doc:composition-api-setup:Usage with Render Functions",
    title: "Usage with Render Functions",
    description: "composition-api-setup",
    url: "https:/vuejs.org/api/composition-api-setup#usage-with-render-functions"
  },
  {
    id: "doc:custom-renderer:createRenderer()",
    title: "createRenderer()",
    description: "custom-renderer",
    url: "https:/vuejs.org/api/custom-renderer#createrenderer"
  },
  {
    id: "doc:general:version",
    title: "version",
    description: "general",
    url: "https:/vuejs.org/api/general#version"
  },
  {
    id: "doc:general:nextTick()",
    title: "nextTick()",
    description: "general",
    url: "https:/vuejs.org/api/general#nexttick"
  },
  {
    id: "doc:general:defineComponent()",
    title: "defineComponent()",
    description: "general",
    url: "https:/vuejs.org/api/general#definecomponent"
  },
  {
    id: "doc:general:defineAsyncComponent()",
    title: "defineAsyncComponent()",
    description: "general",
    url: "https:/vuejs.org/api/general#defineasynccomponent"
  },
  {
    id: "doc:general:defineCustomElement()",
    title: "defineCustomElement()",
    description: "general",
    url: "https:/vuejs.org/api/general#definecustomelement"
  },
  {
    id: "doc:options-composition:provide",
    title: "provide",
    description: "options-composition",
    url: "https:/vuejs.org/api/options-composition#provide"
  },
  {
    id: "doc:options-composition:inject",
    title: "inject",
    description: "options-composition",
    url: "https:/vuejs.org/api/options-composition#inject"
  },
  {
    id: "doc:options-composition:mixins",
    title: "mixins",
    description: "options-composition",
    url: "https:/vuejs.org/api/options-composition#mixins"
  },
  {
    id: "doc:options-composition:extends",
    title: "extends",
    description: "options-composition",
    url: "https:/vuejs.org/api/options-composition#extends"
  },
  {
    id: "doc:options-lifecycle:beforeCreate",
    title: "beforeCreate",
    description: "options-lifecycle",
    url: "https:/vuejs.org/api/options-lifecycle#beforecreate"
  },
  {
    id: "doc:options-lifecycle:created",
    title: "created",
    description: "options-lifecycle",
    url: "https:/vuejs.org/api/options-lifecycle#created"
  },
  {
    id: "doc:options-lifecycle:beforeMount",
    title: "beforeMount",
    description: "options-lifecycle",
    url: "https:/vuejs.org/api/options-lifecycle#beforemount"
  },
  {
    id: "doc:options-lifecycle:mounted",
    title: "mounted",
    description: "options-lifecycle",
    url: "https:/vuejs.org/api/options-lifecycle#mounted"
  },
  {
    id: "doc:options-lifecycle:beforeUpdate",
    title: "beforeUpdate",
    description: "options-lifecycle",
    url: "https:/vuejs.org/api/options-lifecycle#beforeupdate"
  },
  {
    id: "doc:options-lifecycle:updated",
    title: "updated",
    description: "options-lifecycle",
    url: "https:/vuejs.org/api/options-lifecycle#updated"
  },
  {
    id: "doc:options-lifecycle:beforeUnmount",
    title: "beforeUnmount",
    description: "options-lifecycle",
    url: "https:/vuejs.org/api/options-lifecycle#beforeunmount"
  },
  {
    id: "doc:options-lifecycle:unmounted",
    title: "unmounted",
    description: "options-lifecycle",
    url: "https:/vuejs.org/api/options-lifecycle#unmounted"
  },
  {
    id: "doc:options-lifecycle:errorCaptured",
    title: "errorCaptured",
    description: "options-lifecycle",
    url: "https:/vuejs.org/api/options-lifecycle#errorcaptured"
  },
  {
    id: "doc:options-lifecycle:renderTracked",
    title: "renderTracked",
    description: "options-lifecycle",
    url: "https:/vuejs.org/api/options-lifecycle#rendertracked"
  },
  {
    id: "doc:options-lifecycle:renderTriggered",
    title: "renderTriggered",
    description: "options-lifecycle",
    url: "https:/vuejs.org/api/options-lifecycle#rendertriggered"
  },
  {
    id: "doc:options-lifecycle:activated",
    title: "activated",
    description: "options-lifecycle",
    url: "https:/vuejs.org/api/options-lifecycle#activated"
  },
  {
    id: "doc:options-lifecycle:deactivated",
    title: "deactivated",
    description: "options-lifecycle",
    url: "https:/vuejs.org/api/options-lifecycle#deactivated"
  },
  {
    id: "doc:options-lifecycle:serverPrefetch",
    title: "serverPrefetch",
    description: "options-lifecycle",
    url: "https:/vuejs.org/api/options-lifecycle#serverprefetch"
  },
  {
    id: "doc:options-misc:name",
    title: "name",
    description: "options-misc",
    url: "https:/vuejs.org/api/options-misc#name"
  },
  {
    id: "doc:options-misc:inheritAttrs",
    title: "inheritAttrs",
    description: "options-misc",
    url: "https:/vuejs.org/api/options-misc#inheritattrs"
  },
  {
    id: "doc:options-misc:components",
    title: "components",
    description: "options-misc",
    url: "https:/vuejs.org/api/options-misc#components"
  },
  {
    id: "doc:options-misc:directives",
    title: "directives",
    description: "options-misc",
    url: "https:/vuejs.org/api/options-misc#directives"
  },
  {
    id: "doc:options-rendering:template",
    title: "template",
    description: "options-rendering",
    url: "https:/vuejs.org/api/options-rendering#template"
  },
  {
    id: "doc:options-rendering:render",
    title: "render",
    description: "options-rendering",
    url: "https:/vuejs.org/api/options-rendering#render"
  },
  {
    id: "doc:options-rendering:compilerOptions",
    title: "compilerOptions",
    description: "options-rendering",
    url: "https:/vuejs.org/api/options-rendering#compileroptions"
  },
  {
    id: "doc:options-rendering:slots",
    title: "slots",
    description: "options-rendering",
    url: "https:/vuejs.org/api/options-rendering#slots"
  },
  {
    id: "doc:options-state:data",
    title: "data",
    description: "options-state",
    url: "https:/vuejs.org/api/options-state#data"
  },
  {
    id: "doc:options-state:props",
    title: "props",
    description: "options-state",
    url: "https:/vuejs.org/api/options-state#props"
  },
  {
    id: "doc:options-state:computed",
    title: "computed",
    description: "options-state",
    url: "https:/vuejs.org/api/options-state#computed"
  },
  {
    id: "doc:options-state:methods",
    title: "methods",
    description: "options-state",
    url: "https:/vuejs.org/api/options-state#methods"
  },
  {
    id: "doc:options-state:watch",
    title: "watch",
    description: "options-state",
    url: "https:/vuejs.org/api/options-state#watch"
  },
  {
    id: "doc:options-state:emits",
    title: "emits",
    description: "options-state",
    url: "https:/vuejs.org/api/options-state#emits"
  },
  {
    id: "doc:options-state:expose",
    title: "expose",
    description: "options-state",
    url: "https:/vuejs.org/api/options-state#expose"
  },
  {
    id: "doc:reactivity-advanced:shallowRef()",
    title: "shallowRef()",
    description: "reactivity-advanced",
    url: "https:/vuejs.org/api/reactivity-advanced#shallowref"
  },
  {
    id: "doc:reactivity-advanced:triggerRef()",
    title: "triggerRef()",
    description: "reactivity-advanced",
    url: "https:/vuejs.org/api/reactivity-advanced#triggerref"
  },
  {
    id: "doc:reactivity-advanced:customRef()",
    title: "customRef()",
    description: "reactivity-advanced",
    url: "https:/vuejs.org/api/reactivity-advanced#customref"
  },
  {
    id: "doc:reactivity-advanced:shallowReactive()",
    title: "shallowReactive()",
    description: "reactivity-advanced",
    url: "https:/vuejs.org/api/reactivity-advanced#shallowreactive"
  },
  {
    id: "doc:reactivity-advanced:shallowReadonly()",
    title: "shallowReadonly()",
    description: "reactivity-advanced",
    url: "https:/vuejs.org/api/reactivity-advanced#shallowreadonly"
  },
  {
    id: "doc:reactivity-advanced:toRaw()",
    title: "toRaw()",
    description: "reactivity-advanced",
    url: "https:/vuejs.org/api/reactivity-advanced#toraw"
  },
  {
    id: "doc:reactivity-advanced:markRaw()",
    title: "markRaw()",
    description: "reactivity-advanced",
    url: "https:/vuejs.org/api/reactivity-advanced#markraw"
  },
  {
    id: "doc:reactivity-advanced:effectScope()",
    title: "effectScope()",
    description: "reactivity-advanced",
    url: "https:/vuejs.org/api/reactivity-advanced#effectscope"
  },
  {
    id: "doc:reactivity-advanced:getCurrentScope()",
    title: "getCurrentScope()",
    description: "reactivity-advanced",
    url: "https:/vuejs.org/api/reactivity-advanced#getcurrentscope"
  },
  {
    id: "doc:reactivity-advanced:onScopeDispose()",
    title: "onScopeDispose()",
    description: "reactivity-advanced",
    url: "https:/vuejs.org/api/reactivity-advanced#onscopedispose"
  },
  {
    id: "doc:reactivity-core:ref()",
    title: "ref()",
    description: "reactivity-core",
    url: "https:/vuejs.org/api/reactivity-core#ref"
  },
  {
    id: "doc:reactivity-core:computed()",
    title: "computed()",
    description: "reactivity-core",
    url: "https:/vuejs.org/api/reactivity-core#computed"
  },
  {
    id: "doc:reactivity-core:reactive()",
    title: "reactive()",
    description: "reactivity-core",
    url: "https:/vuejs.org/api/reactivity-core#reactive"
  },
  {
    id: "doc:reactivity-core:readonly()",
    title: "readonly()",
    description: "reactivity-core",
    url: "https:/vuejs.org/api/reactivity-core#readonly"
  },
  {
    id: "doc:reactivity-core:watchEffect()",
    title: "watchEffect()",
    description: "reactivity-core",
    url: "https:/vuejs.org/api/reactivity-core#watcheffect"
  },
  {
    id: "doc:reactivity-core:watchPostEffect()",
    title: "watchPostEffect()",
    description: "reactivity-core",
    url: "https:/vuejs.org/api/reactivity-core#watchposteffect"
  },
  {
    id: "doc:reactivity-core:watchSyncEffect()",
    title: "watchSyncEffect()",
    description: "reactivity-core",
    url: "https:/vuejs.org/api/reactivity-core#watchsynceffect"
  },
  {
    id: "doc:reactivity-core:watch()",
    title: "watch()",
    description: "reactivity-core",
    url: "https:/vuejs.org/api/reactivity-core#watch"
  },
  {
    id: "doc:reactivity-utilities:isRef()",
    title: "isRef()",
    description: "reactivity-utilities",
    url: "https:/vuejs.org/api/reactivity-utilities#isref"
  },
  {
    id: "doc:reactivity-utilities:unref()",
    title: "unref()",
    description: "reactivity-utilities",
    url: "https:/vuejs.org/api/reactivity-utilities#unref"
  },
  {
    id: "doc:reactivity-utilities:toRef()",
    title: "toRef()",
    description: "reactivity-utilities",
    url: "https:/vuejs.org/api/reactivity-utilities#toref"
  },
  {
    id: "doc:reactivity-utilities:toValue()",
    title: "toValue()",
    description: "reactivity-utilities",
    url: "https:/vuejs.org/api/reactivity-utilities#tovalue"
  },
  {
    id: "doc:reactivity-utilities:toRefs()",
    title: "toRefs()",
    description: "reactivity-utilities",
    url: "https:/vuejs.org/api/reactivity-utilities#torefs"
  },
  {
    id: "doc:reactivity-utilities:isProxy()",
    title: "isProxy()",
    description: "reactivity-utilities",
    url: "https:/vuejs.org/api/reactivity-utilities#isproxy"
  },
  {
    id: "doc:reactivity-utilities:isReactive()",
    title: "isReactive()",
    description: "reactivity-utilities",
    url: "https:/vuejs.org/api/reactivity-utilities#isreactive"
  },
  {
    id: "doc:reactivity-utilities:isReadonly()",
    title: "isReadonly()",
    description: "reactivity-utilities",
    url: "https:/vuejs.org/api/reactivity-utilities#isreadonly"
  },
  {
    id: "doc:render-function:h()",
    title: "h()",
    description: "render-function",
    url: "https:/vuejs.org/api/render-function#h"
  },
  {
    id: "doc:render-function:mergeProps()",
    title: "mergeProps()",
    description: "render-function",
    url: "https:/vuejs.org/api/render-function#mergeprops"
  },
  {
    id: "doc:render-function:cloneVNode()",
    title: "cloneVNode()",
    description: "render-function",
    url: "https:/vuejs.org/api/render-function#clonevnode"
  },
  {
    id: "doc:render-function:isVNode()",
    title: "isVNode()",
    description: "render-function",
    url: "https:/vuejs.org/api/render-function#isvnode"
  },
  {
    id: "doc:render-function:resolveComponent()",
    title: "resolveComponent()",
    description: "render-function",
    url: "https:/vuejs.org/api/render-function#resolvecomponent"
  },
  {
    id: "doc:render-function:resolveDirective()",
    title: "resolveDirective()",
    description: "render-function",
    url: "https:/vuejs.org/api/render-function#resolvedirective"
  },
  {
    id: "doc:render-function:withDirectives()",
    title: "withDirectives()",
    description: "render-function",
    url: "https:/vuejs.org/api/render-function#withdirectives"
  },
  {
    id: "doc:render-function:withModifiers()",
    title: "withModifiers()",
    description: "render-function",
    url: "https:/vuejs.org/api/render-function#withmodifiers"
  },
  {
    id: "doc:sfc-css-features:Scoped CSS",
    title: "Scoped CSS",
    description: "sfc-css-features",
    url: "https:/vuejs.org/api/sfc-css-features#scoped-css"
  },
  {
    id: "doc:sfc-css-features:CSS Modules",
    title: "CSS Modules",
    description: "sfc-css-features",
    url: "https:/vuejs.org/api/sfc-css-features#css-modules"
  },
  {
    id: "doc:sfc-css-features:v-bind() in CSS",
    title: "v-bind() in CSS",
    description: "sfc-css-features",
    url: "https:/vuejs.org/api/sfc-css-features#v-bind-in-css"
  },
  {
    id: "doc:sfc-script-setup:Basic Syntax",
    title: "Basic Syntax",
    description: "sfc-script-setup",
    url: "https:/vuejs.org/api/sfc-script-setup#basic-syntax"
  },
  {
    id: "doc:sfc-script-setup:Reactivity",
    title: "Reactivity",
    description: "sfc-script-setup",
    url: "https:/vuejs.org/api/sfc-script-setup#reactivity"
  },
  {
    id: "doc:sfc-script-setup:Using Components",
    title: "Using Components",
    description: "sfc-script-setup",
    url: "https:/vuejs.org/api/sfc-script-setup#using-components"
  },
  {
    id: "doc:sfc-script-setup:Using Custom Directives",
    title: "Using Custom Directives",
    description: "sfc-script-setup",
    url: "https:/vuejs.org/api/sfc-script-setup#using-custom-directives"
  },
  {
    id: "doc:sfc-script-setup:defineProps() & defineEmits()",
    title: "defineProps() & defineEmits()",
    description: "sfc-script-setup",
    url: "https:/vuejs.org/api/sfc-script-setup#defineprops-defineemits"
  },
  {
    id: "doc:sfc-script-setup:defineModel()",
    title: "defineModel()",
    description: "sfc-script-setup",
    url: "https:/vuejs.org/api/sfc-script-setup#definemodel"
  },
  {
    id: "doc:sfc-script-setup:defineExpose()",
    title: "defineExpose()",
    description: "sfc-script-setup",
    url: "https:/vuejs.org/api/sfc-script-setup#defineexpose"
  },
  {
    id: "doc:sfc-script-setup:defineOptions()",
    title: "defineOptions()",
    description: "sfc-script-setup",
    url: "https:/vuejs.org/api/sfc-script-setup#defineoptions"
  },
  {
    id: "doc:sfc-script-setup:defineSlots()",
    title: "defineSlots()",
    description: "sfc-script-setup",
    url: "https:/vuejs.org/api/sfc-script-setup#defineslots"
  },
  {
    id: "doc:sfc-script-setup:useSlots() & useAttrs()",
    title: "useSlots() & useAttrs()",
    description: "sfc-script-setup",
    url: "https:/vuejs.org/api/sfc-script-setup#useslots-useattrs"
  },
  {
    id: "doc:sfc-script-setup:Usage alongside normal <script>",
    title: "Usage alongside normal <script>",
    description: "sfc-script-setup",
    url: "https:/vuejs.org/api/sfc-script-setup#usage-alongside-normal-script"
  },
  {
    id: "doc:sfc-script-setup:Top-level await",
    title: "Top-level await",
    description: "sfc-script-setup",
    url: "https:/vuejs.org/api/sfc-script-setup#top-level-await"
  },
  {
    id: "doc:sfc-script-setup:Generics",
    title: "Generics",
    description: "sfc-script-setup",
    url: "https:/vuejs.org/api/sfc-script-setup#generics"
  },
  {
    id: "doc:sfc-script-setup:Restrictions",
    title: "Restrictions",
    description: "sfc-script-setup",
    url: "https:/vuejs.org/api/sfc-script-setup#restrictions"
  },
  {
    id: "doc:sfc-spec:Overview",
    title: "Overview",
    description: "sfc-spec",
    url: "https:/vuejs.org/api/sfc-spec#overview"
  },
  {
    id: "doc:sfc-spec:Language Blocks",
    title: "Language Blocks",
    description: "sfc-spec",
    url: "https:/vuejs.org/api/sfc-spec#language-blocks"
  },
  {
    id: "doc:sfc-spec:Automatic Name Inference",
    title: "Automatic Name Inference",
    description: "sfc-spec",
    url: "https:/vuejs.org/api/sfc-spec#automatic-name-inference"
  },
  {
    id: "doc:sfc-spec:Pre-Processors",
    title: "Pre-Processors",
    description: "sfc-spec",
    url: "https:/vuejs.org/api/sfc-spec#pre-processors"
  },
  {
    id: "doc:sfc-spec:src Imports",
    title: "src Imports",
    description: "sfc-spec",
    url: "https:/vuejs.org/api/sfc-spec#src-imports"
  },
  {
    id: "doc:sfc-spec:Comments",
    title: "Comments",
    description: "sfc-spec",
    url: "https:/vuejs.org/api/sfc-spec#comments"
  },
  {
    id: "doc:ssr:renderToString()",
    title: "renderToString()",
    description: "ssr",
    url: "https:/vuejs.org/api/ssr#rendertostring"
  },
  {
    id: "doc:ssr:renderToNodeStream()",
    title: "renderToNodeStream()",
    description: "ssr",
    url: "https:/vuejs.org/api/ssr#rendertonodestream"
  },
  {
    id: "doc:ssr:pipeToNodeWritable()",
    title: "pipeToNodeWritable()",
    description: "ssr",
    url: "https:/vuejs.org/api/ssr#pipetonodewritable"
  },
  {
    id: "doc:ssr:renderToWebStream()",
    title: "renderToWebStream()",
    description: "ssr",
    url: "https:/vuejs.org/api/ssr#rendertowebstream"
  },
  {
    id: "doc:ssr:pipeToWebWritable()",
    title: "pipeToWebWritable()",
    description: "ssr",
    url: "https:/vuejs.org/api/ssr#pipetowebwritable"
  },
  {
    id: "doc:ssr:renderToSimpleStream()",
    title: "renderToSimpleStream()",
    description: "ssr",
    url: "https:/vuejs.org/api/ssr#rendertosimplestream"
  },
  {
    id: "doc:ssr:useSSRContext()",
    title: "useSSRContext()",
    description: "ssr",
    url: "https:/vuejs.org/api/ssr#usessrcontext"
  },
  {
    id: "doc:utility-types:PropType",
    title: "PropType",
    description: "utility-types",
    url: "https:/vuejs.org/api/utility-types#proptype-t"
  },
  {
    id: "doc:utility-types:MaybeRef",
    title: "MaybeRef",
    description: "utility-types",
    url: "https:/vuejs.org/api/utility-types#mayberef"
  },
  {
    id: "doc:utility-types:MaybeRefOrGetter",
    title: "MaybeRefOrGetter",
    description: "utility-types",
    url: "https:/vuejs.org/api/utility-types#maybereforgetter"
  },
  {
    id: "doc:utility-types:ExtractPropTypes",
    title: "ExtractPropTypes",
    description: "utility-types",
    url: "https:/vuejs.org/api/utility-types#extractproptypes"
  },
  {
    id: "doc:utility-types:ExtractPublicPropTypes",
    title: "ExtractPublicPropTypes",
    description: "utility-types",
    url: "https:/vuejs.org/api/utility-types#extractpublicproptypes"
  },
  {
    id: "doc:utility-types:ComponentCustomProperties",
    title: "ComponentCustomProperties",
    description: "utility-types",
    url: "https:/vuejs.org/api/utility-types#componentcustomproperties"
  },
  {
    id: "doc:utility-types:ComponentCustomOptions",
    title: "ComponentCustomOptions",
    description: "utility-types",
    url: "https:/vuejs.org/api/utility-types#componentcustomoptions"
  },
  {
    id: "doc:utility-types:ComponentCustomProps",
    title: "ComponentCustomProps",
    description: "utility-types",
    url: "https:/vuejs.org/api/utility-types#componentcustomprops"
  },
  {
    id: "doc:utility-types:CSSProperties",
    title: "CSSProperties",
    description: "utility-types",
    url: "https:/vuejs.org/api/utility-types#cssproperties"
  }
];
export {
  i as default
};
