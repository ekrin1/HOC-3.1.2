import { Loader } from './Loader.tsx';
import { ToDo } from './App';

type withLoadingProps = {
  isLoading: boolean;
};

type TodoListProps = {
  todos: ToDo[];
};

export const withLoading = (Component: React.ComponentType<any>) => {
  const EnhancedComponent = ({
    isLoading,
    ...props
  }: withLoadingProps & TodoListProps) => {
    if (isLoading) {
      return <Loader />;
    }
    return <Component {...props} />;
  };
  return EnhancedComponent;
};
