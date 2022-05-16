  import {documentReady} from './actions';
  import headerNavigator from './modules/headerNavigator';
  import chooseName from './modules/chooseName';
  import address from './modules/address';
  import dragAndDrop from './modules/dragAndDrop';
  import lenderTemplate from './modules/lenderTemplate';
  import results from './modules/result';
  import progress from './modules/progress';
  function callback(){

    headerNavigator();
    chooseName();
    address();
    dragAndDrop();
    lenderTemplate();
    results();
    progress();
    
}

  
  documentReady(callback);