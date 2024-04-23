# Advanced React

#### Design patterns: Layout Components

They focus on organizing other components with in a web page.

The core components of our pages, should be unaware & unconcerned about the precise location within the page structure.

1.  [Split Screen](https://github.com/nygilgp/learn-patterns-designs-multi/tree/split-screen)
    Here we define the page layout and each children component will be placed by the split screen component. The children are not aware of the position where they will fall into.

        const Container = styled.div`
          display: flex;
        `;
        const Panel = styled.div`
          flex: ${(p) => p.flex};
        `;

        export const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }) => {
          const [left, right] = children;
          return (
            <Container>
              <Panel flex={leftWidth}>{left}</Panel>
              <Panel flex={rightWidth}>{right}</Panel>
            </Container>
          );
        };
        const LeftSideComp = ({ title }) => {
          return <h2 style={{ backgroundColor: 'crimson' }}>{title}</h2>;
        };

        const RightSideComp = ({ title }) => {
          return <h2 style={{ backgroundColor: 'burlywood' }}>{title}</h2>;
        };

        export const App = () => {
          return (
            <SplitScreen leftWidth={1} rightWidth={3}>
              <LeftSideComp title="Left!" />
              <RightSideComp title="Right!!" />
            </SplitScreen>
          );
        };

2.  [Lists](https://github.com/nygilgp/learn-patterns-designs-multi/tree/lists)
    Here we define layout of each list will be displayed
    <code>`<Regular
  items={authors}
  sourceName="author"
  ItemComponent={SmallAuthorsListItems}
/>`</code>

            items => is the data
            sourceName => is the prop name that needs to be passed to ItemComponent
            ItemComponent => is how each item of the data is to be displayed to user

            export default function Regular({ items, sourceName, ItemComponent }) {
              return (
                <>
                  {items.map((item, i) => (
                    <ItemComponent key={i} {...{ [sourceName]: item }} />
                  ))}
                </>
              );
            }

            export default function SmallListItems({ author }) {
              const { name, age } = author;
              return (
                <p>
                  Name: {name}, Age: {age}
                </p>
              );

3.  [Modal](https://github.com/nygilgp/learn-patterns-designs-multi/tree/modal)
    A modal is the most used component, here we define a modal component

            export default function Modal({ children }) {
              const [show, setShow] = useState(false);
              return (
                <>
                  <button onClick={() => setShow(true)}>Show Modal</button>
                  {show && (
                    <ModalBackgroud onClick={() => setShow(false)}>
                      <ModalContent onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setShow(false)}>X</button>
                        {children}
                      </ModalContent>
                    </ModalBackgroud>
                  )}
                </>
              );
            }

#### Design patterns: Container Components

Components are unare of the source or management of their data.

1.  [Data Source Loader With Renderer](https://github.com/nygilgp/learn-patterns-designs-multi/tree/loader)
    Data source container component will renderer the child component with the data provided to it. Data can be from anywhere.

        export default function DataSourceWithRender({ getData = () => {}, render }) {
          const [resource, setResource] = useState(null);

          useEffect(() => {
            (async () => {
              const data = await getData();
              setResource(data);
            })();
          }, []);

          return render(resource);
        }

        async function getDataFromServer(url) {
          const response = await axios.get(url);
          return response.data;
        }

        const getDataFromLocalStorage = async (key) =>
          (await localStorage.getItem(key)) ?? '';

        const Message = ({ msg }) => <h1>{msg}</h1>;

        export const App = () => {
          return (
            <>
              <DataSourceWithRender
                getData={() => getDataFromServer('http://localhost:9090/users/1')}
                render={(resource) => <UserInfo user={resource} />}
              />
              <DataSourceWithRender
                getData={() => getDataFromLocalStorage('test')}
                render={(resource) => <Message msg={resource} />}
              />
            </>
          );
        };

#### Design patterns: Controlled and Uncontrolled Components

Uncontrolled components are were component itself manages its own internal state.
ex 1 Form: In this case the form field states are defined in the component and onSubmit method is the only prop passed down from parent to child

ex 2 Modal: We have the state and close action defined inside the modal component. Now there is no way for the parent to controll the modal

ex 3 Flow: A multi page form, if the state and data are defined inside the component, it will be difficult to test the flow.

Controlled components on the other hand, the parent component is responsible for managing the state.
ex 1 Form: Here the controlled component will have no use state hook, all fields and submit method will be passed down from parent to child.

ex 2 Modal: We define the state and actions in the parent and pass them as props inside the modal. Modal only has the duty to display the children and state and action are comming from outside, so easy to controll.

ex 3 Flow: A multi page form, we define the state and data collection function in the parent and pass them as props its easy to test, by changing the props. We can even do skip of step which is not needed.

Controlled components are more easier to test, as the desired state of the component can be initialized via props.

1.  [Controlled components](https://github.com/nygilgp/learn-patterns-designs-multi/tree/controlled-component)

#### Design patterns: HOCs

A component that returns another component. HOCs are functions that return components.

Improve exsisting components without modifying their code.

1.  [HOCs](https://github.com/nygilgp/learn-patterns-designs-multi/tree/higher-order-components)

#### Design patterns: More

2.  [Observer Pattern](https://github.com/nygilgp/learn-patterns-designs-multi/tree/observer-pattern)
    We use a node package [mitt](https://www.npmjs.com/mitt) to attain a observer pattern. Here parent doesn't need to pass the actions to the children as props, it will be taken care of by the emitter defined in root app file. The couter state is defined in counter component alone.

    <code>export const emitter = mitt();</code>
    We define emitter in app component.

            import { emitter } from '../App';

            export default function Counter() {
              const [count, setCount] = useState(0);
              useEffect(() => {
                const onIncrement = () => {
                  setCount((count) => count + 1);
                };
                const onDecrement = () => {
                  setCount((count) => count - 1);
                };
                emitter.on('inc', onIncrement);
                emitter.on('dec', onDecrement);
                return () => {
                  emitter.off('inc', onIncrement);
                  emitter.off('dec', onDecrement);
                };
              }, []);

              return <div>#: {count}</div>;
            }


            export default function Buttons() {
              const onIncrementCounter = () => {
                emitter.emit('inc');
              };
              const onDecrementCounter = () => {
                emitter.emit('dec');
              };
              return (
                <div>
                  <button onClick={onIncrementCounter}>+</button>
                  <button onClick={onDecrementCounter}>-</button>
                </div>
              );
            }

            export default function ParentComponent() {
              return (
                <>
                  <Buttons />
                  <Counter />
                </>
              );
            }

#### Scalable Project Architecture

1.  [General ]()
