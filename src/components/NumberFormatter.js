const numberFormat = (value) =>
new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency:'NGN'
}).format(value);


export default numberFormat;