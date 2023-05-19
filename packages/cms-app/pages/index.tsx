import {FeatureBasicInfoContainer} from "../features/FeatureBasicInfo/FeatureBasicInfoContainer"

export default FeatureBasicInfoContainer;


// Pass props to _app.tsx
/*Index.getInitialProps = async (ctx: NextPageContext) => {
  const myCustomProp = 'Hello, world!';
  return { myCustomProp };
};*/


// example of communication with electron
/*function test() {
    if (typeof window !== "undefined") {
      window.electron.invoke('run-command', 'ls').then((result) => {
        if (result.success) {
          console.log(`Command output: ${result.data}`);
        } else {
          console.error(`Error running command: ${result.error}`);
        }
      }).catch((error: unknown) => {
        console.error(`Error invoking command: ${error}`);
      });
    }
  }*/
