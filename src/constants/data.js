import images from './images';

const wines = [
  {
    title: 'Papilon Brut',
    price: 'Ksh. 1,200',
    tags: 'AU | Bottle',
  },
  {
    title: 'Tusker Lager',
    price: 'Ksh. 350',
    tags: 'AU | Bottle',
  },
  {
    title: 'Frontera Merlot',
    price: 'Ksh. 2300',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: 'Ksh. 3500',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Pilsner',
    price: 'Ksh. 350',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'Ksh. 2,000',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'Ksh. 1,600',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: 'Ksh. 1,000',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashion',
    price: 'Ksh. 1,100',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'Ksh. 2,600',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Chef of the year',
    
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    
  },
];

export default { wines, cocktails, awards };
