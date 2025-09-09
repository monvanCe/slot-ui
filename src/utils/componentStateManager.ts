import { store } from '../store/store';
import { COMPONENT_STATES } from '../const/componentStates';
import {
  setMobileBetButtonState,
  setMobileAutoplayButtonState,
  setSpinButtonState,
  setInfoButtonState,
  setSettingsButtonState,
  setVolumeButtonState,
  setCreditButtonState,
  setBetButtonState,
  setAutoplayButtonState,
} from '../store/slices/componentStatesSlice';

// Component state'lerini yönetmek için utility fonksiyonları

/**
 * Component state'ini variant ile günceller
 * @param componentName - Güncellenecek component adı
 * @param variant - Kullanılacak variant (default, active, spinning, vb.)
 */
export const setComponentStateByVariant = (
  componentName: keyof typeof COMPONENT_STATES,
  variant: TButtonVariants
) => {
  const dispatch = store.dispatch;
  const componentStates = COMPONENT_STATES[componentName];
  const variantState = componentStates[variant];

  if (!variantState) {
    console.warn(
      `Variant '${variant}' not found for component '${componentName}'`
    );
    return;
  }

  // Component adına göre doğru action'ı dispatch et
  switch (componentName) {
    case 'mobileBetButton':
      dispatch(setMobileBetButtonState(variantState as IOutlinedButton));
      break;
    case 'mobileAutoplayButton':
      dispatch(setMobileAutoplayButtonState(variantState as IOutlinedButton));
      break;
    case 'spinButton':
      dispatch(setSpinButtonState(variantState as IOutlinedButton));
      break;
    case 'infoButton':
      dispatch(setInfoButtonState(variantState as IInfoButton));
      break;
    case 'settingsButton':
      dispatch(setSettingsButtonState(variantState as IIconButton));
      break;
    case 'volumeButton':
      dispatch(setVolumeButtonState(variantState as IIconButton));
      break;
    case 'creditButton':
      dispatch(setCreditButtonState(variantState as ILabeledPriceButton));
      break;
    case 'betButton':
      dispatch(setBetButtonState(variantState as ILabeledPriceButton));
      break;
    case 'autoplayButton':
      dispatch(setAutoplayButtonState(variantState as ISvgButton));
      break;
    default:
      console.warn(`Unknown component: ${componentName}`);
  }
};

/**
 * Component state'ini spesifik parametrelerle günceller
 * @param componentName - Güncellenecek component adı
 * @param updates - Güncellenecek parametreler
 */
export const setComponentStateByParameters = <
  T extends keyof typeof COMPONENT_STATES
>(
  componentName: T,
  updates: Partial<IComponentStatesSlice[T]>
) => {
  const dispatch = store.dispatch;
  const currentState = store.getState().componentStates[componentName];

  // Mevcut state ile yeni parametreleri birleştir
  const updatedState = { ...currentState, ...updates };

  // Component adına göre doğru action'ı dispatch et
  switch (componentName) {
    case 'mobileBetButton':
      dispatch(setMobileBetButtonState(updatedState as IOutlinedButton));
      break;
    case 'mobileAutoplayButton':
      dispatch(setMobileAutoplayButtonState(updatedState as IOutlinedButton));
      break;
    case 'spinButton':
      dispatch(setSpinButtonState(updatedState as IOutlinedButton));
      break;
    case 'infoButton':
      dispatch(setInfoButtonState(updatedState as IInfoButton));
      break;
    case 'settingsButton':
      dispatch(setSettingsButtonState(updatedState as IIconButton));
      break;
    case 'volumeButton':
      dispatch(setVolumeButtonState(updatedState as IIconButton));
      break;
    case 'creditButton':
      dispatch(setCreditButtonState(updatedState as ILabeledPriceButton));
      break;
    case 'betButton':
      dispatch(setBetButtonState(updatedState as ILabeledPriceButton));
      break;
    case 'autoplayButton':
      dispatch(setAutoplayButtonState(updatedState as ISvgButton));
      break;
    default:
      console.warn(`Unknown component: ${componentName}`);
  }
};

/**
 * Component state'ini alır
 * @param componentName - Alınacak component adı
 * @returns Component state'i
 */
export const getComponentState = <T extends keyof typeof COMPONENT_STATES>(
  componentName: T
): IComponentStatesSlice[T] => {
  const state = store.getState();
  return state.componentStates[componentName];
};

/**
 * Tüm component state'lerini alır
 * @returns Tüm component state'leri
 */
export const getAllComponentStates = () => {
  const state = store.getState();
  return state.componentStates;
};

/**
 * Wrapper fonksiyon - string-string verirsen variant, string-object verirsen parameter fonksiyonunu çalıştırır
 * @param componentName - Güncellenecek component adı
 * @param variantOrUpdates - Variant string'i veya güncellenecek parametreler object'i
 */
export const setComponentState = <T extends keyof typeof COMPONENT_STATES>(
  componentName: T,
  variantOrUpdates: TButtonVariants | Partial<IComponentStatesSlice[T]>
) => {
  // Eğer string ise variant fonksiyonunu çağır
  if (typeof variantOrUpdates === 'string') {
    setComponentStateByVariant(
      componentName,
      variantOrUpdates as TButtonVariants
    );
  }
  // Eğer object ise parameter fonksiyonunu çağır
  else {
    setComponentStateByParameters(
      componentName,
      variantOrUpdates as Partial<IComponentStatesSlice[T]>
    );
  }
};

/**
 * Batch işlemi - birden fazla component'i aynı anda günceller
 * @param componentNames - Güncellenecek component adları array'i
 * @param variantOrUpdates - Tüm component'ler için ortak variant string'i veya güncellenecek parametreler object'i
 */
export const setBatchComponentState = (
  componentNames: (keyof typeof COMPONENT_STATES)[],
  variantOrUpdates:
    | TButtonVariants
    | Partial<IComponentStatesSlice[keyof typeof COMPONENT_STATES]>
) => {
  // Her component için aynı işlemi uygula
  componentNames.forEach((componentName) => {
    setComponentState(componentName, variantOrUpdates as any);
  });
};

// Kullanım örnekleri:
/*
// Wrapper fonksiyon ile variant kullanımı (string-string)
setComponentState('autoplayButton', 'spinning');
setComponentState('spinButton', 'active');
setComponentState('volumeButton', 'passive');

// Wrapper fonksiyon ile parameter kullanımı (string-object)
setComponentState('autoplayButton', { disabled: true });
setComponentState('infoButton', { fillColor: '#ff0000' });
setComponentState('settingsButton', { color: 'blue' });

// Batch işlemi ile variant kullanımı (string[]-string)
setBatchComponentState(['settingsButton', 'infoButton'], 'default');
setBatchComponentState(['autoplayButton', 'spinButton'], 'active');

// Batch işlemi ile parameter kullanımı (string[]-object)
setBatchComponentState(['settingsButton', 'infoButton'], { disabled: true });
setBatchComponentState(['volumeButton', 'creditButton'], { color: 'blue' });

// Direkt fonksiyonlar
setComponentStateByVariant('autoplayButton', 'spinning');
setComponentStateByParameters('autoplayButton', { disabled: true });

// State okuma
const autoplayState = getComponentState('autoplayButton');
const allStates = getAllComponentStates();
*/
