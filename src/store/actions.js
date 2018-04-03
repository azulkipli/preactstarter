import createStore from "unistore";

// If actions is a function, it gets passed the store:
let actions = store => ({
  // Actions can just return a state update:
  increment(state) {
    return { count: state.count + 1 };
  },

  // The above example as an Arrow Function:
  increment2: ({ count }) => ({ count: count + 1 }),

  //Actions receive current state as first parameter and any other params next
  //check this function as <button onClick={incrementAndLog}>
  incrementAndLog: ({ count }, { apalah }) => {
    console.info("incrementAndLog apalah: ", apalah);
    return { count: count + 1 };
  },

  // Async actions can be pure async/promise functions:
  async getStuff(state) {
    let res = await fetch("/foo.json");
    return { stuff: await res.json() };
  },

  // ... or just actions that call store.setState() later:
  incrementAsync(state) {
    setTimeout(() => {
      store.setState({ count: state.count + 1 });
    }, 100);
  },

  // signin process
  signin(state) {
    return { login: true };
  },

  toggleModal: (state, event) => {
    console.log("toggleModal state: ", state);
    console.log("toggleModal event: ", event);
    // console.log("content", content);
    return { modalActive: !state.modalActive, modalTitle: state.modalTitle, modalContent: state.modalContent };
    // return { modalActive: !state.modalActive };
  },

  toggleDrawer(state) {
    return { drawerActive: !state.drawerActive };
  },

  hideDrawer(state) {
    return { drawerActive: false };
  }
});

export default actions;
