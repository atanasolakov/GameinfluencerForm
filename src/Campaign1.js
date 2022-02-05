import Form from "./Form";
function Campaign1(props) {
  const saveDataHandler = (enteredData) => {
    const formData = {
      ...enteredData,
    };
    props.onAddData(formData);
  };

  return (
    <div>
      <Form onSaveData={saveDataHandler}></Form>
    </div>
  );
}
// id: Math.random().toString(),
export default Campaign1;
