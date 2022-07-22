import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { usePostStore } from '../../stores/post';

export default await (async () => {
const { posts, loading, error } = storeToRefs(usePostStore());
const { fetchPosts } = usePostStore();
fetchPosts();
const __VLS_Component = (await import('vue')).defineComponent({
setup() {
() => {
// @ts-ignore
[RouterLink,];
// @ts-ignore
[loading, error, posts];
};
return {};
},
});
const __VLS_slots = (await import('./PostsView.vue.__VLS_template')).default;
return {} as typeof __VLS_Component & (new () => { $slots: typeof __VLS_slots; });
})();
