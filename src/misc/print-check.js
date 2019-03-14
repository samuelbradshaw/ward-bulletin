const printCheck = { onChange: null, printing: false };

const setPrinting = printing => {
  console.log("Printing:", printing);
  const doOnChange = printing !== printCheck.printing && printCheck.onChange;
  printCheck.printing = printing;
  doOnChange && printCheck.onChange(printing);
};

if (window.matchMedia) {
  const mediaQueryList = window.matchMedia("print");
  mediaQueryList.addListener(mql => setPrinting(mql.matches));
}

window.onbeforeprint = () => setPrinting(true);
window.onafterprint = () => setPrinting(false);

export default printCheck;
