import { CustomAppProps } from '../pages/_app';

interface ExtendedJsxElement extends Function {
    getInitialProps: () => Promise<CustomAppProps>
}

export function setInitialPageProps(component: () => JSX.Element, props: CustomAppProps) {
    const extendedComponent = component as unknown as ExtendedJsxElement;
    extendedComponent.getInitialProps = async () => props;
}