// Rolling Di Functionality
const firstDi = document.getElementById('first-page-di');
const secondDi = document.getElementById('second-di');
const thirdDi = document.getElementById('third-di');
const fourthDi = document.getElementById('fourth-di');
const fithDi = document.getElementById('fith-di');
const sixthDi = document.getElementById('sixth-di');

function roll() {
  let value = Math.floor(Math.random() * 6 + 1);
  let di = firstDi;
  di.innerHTML = value;
  setTimeout(() => {
    let value = Math.floor(Math.random() * 6 + 1);
    di.innerHTML = value;
    setTimeout(() => {
      let value = Math.floor(Math.random() * 6 + 1);
      di.innerHTML = value;
      setTimeout(() => {
        let value = Math.floor(Math.random() * 6 + 1);
        di.innerHTML = value;
        setTimeout(() => {
          let value = Math.floor(Math.random() * 6 + 1);
          di.innerHTML = value;
          setTimeout(() => {
            let value = Math.floor(Math.random() * 6 + 1);
            di.innerHTML = value;
          }, 130);
        }, 110);
      }, 90);
    }, 70);
  }, 50);
}

function rollTwo() {
  let di = secondDi;
  let di2 = thirdDi;
  let value = Math.floor(Math.random() * 6 + 1);
  let value2 = Math.floor(Math.random() * 6 + 1);
  di.innerHTML = value;
  di2.innerHTML = value2;
  setTimeout(() => {
    let value = Math.floor(Math.random() * 6 + 1);
    let value2 = Math.floor(Math.random() * 6 + 1);
    di.innerHTML = value;
    di2.innerHTML = value2;
    setTimeout(() => {
      let value = Math.floor(Math.random() * 6 + 1);
      let value2 = Math.floor(Math.random() * 6 + 1);
      di.innerHTML = value;
      di2.innerHTML = value2;
      setTimeout(() => {
        let value = Math.floor(Math.random() * 6 + 1);
        let value2 = Math.floor(Math.random() * 6 + 1);
        di.innerHTML = value;
        di2.innerHTML = value2;
        setTimeout(() => {
          let value = Math.floor(Math.random() * 6 + 1);
          let value2 = Math.floor(Math.random() * 6 + 1);
          di.innerHTML = value;
          di2.innerHTML = value2;
          setTimeout(() => {
            let value = Math.floor(Math.random() * 6 + 1);
            let value2 = Math.floor(Math.random() * 6 + 1);
            di.innerHTML = value;
            di2.innerHTML = value2;
          }, 130);
        }, 110);
      }, 90);
    }, 70);
  }, 50);
}

function rollThree() {
  let di = fourthDi;
  let di2 = fithDi;
  let di3 = sixthDi;
  let value = Math.floor(Math.random() * 6 + 1);
  let value2 = Math.floor(Math.random() * 6 + 1);
  let value3 = Math.floor(Math.random() * 6 + 1);
  di.innerHTML = value;
  di2.innerHTML = value2;
  di3.innerHTML = value3;
  setTimeout(() => {
    let value = Math.floor(Math.random() * 6 + 1);
    let value2 = Math.floor(Math.random() * 6 + 1);
    let value3 = Math.floor(Math.random() * 6 + 1);
    di.innerHTML = value;
    di2.innerHTML = value2;
    di3.innerHTML = value3;
    setTimeout(() => {
      let value = Math.floor(Math.random() * 6 + 1);
      let value2 = Math.floor(Math.random() * 6 + 1);
      let value3 = Math.floor(Math.random() * 6 + 1);
      di.innerHTML = value;
      di2.innerHTML = value2;
      di3.innerHTML = value3;
      setTimeout(() => {
        let value = Math.floor(Math.random() * 6 + 1);
        let value2 = Math.floor(Math.random() * 6 + 1);
        let value3 = Math.floor(Math.random() * 6 + 1);
        di.innerHTML = value;
        di2.innerHTML = value2;
        di3.innerHTML = value3;
        setTimeout(() => {
          let value = Math.floor(Math.random() * 6 + 1);
          let value2 = Math.floor(Math.random() * 6 + 1);
          let value3 = Math.floor(Math.random() * 6 + 1);
          di.innerHTML = value;
          di2.innerHTML = value2;
          di3.innerHTML = value3;
          setTimeout(() => {
            let value = Math.floor(Math.random() * 6 + 1);
            let value2 = Math.floor(Math.random() * 6 + 1);
            let value3 = Math.floor(Math.random() * 6 + 1);
            di.innerHTML = value;
            di2.innerHTML = value2;
            di3.innerHTML = value3;
          }, 130);
        }, 110);
      }, 90);
    }, 70);
  }, 50);
}
