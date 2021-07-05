import { shallowMount } from '@vue/test-utils';
import SharingCaring from '@/components/SharingContainer.vue';

describe('SharingCaring.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(SharingCaring, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
