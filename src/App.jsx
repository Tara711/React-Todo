import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";
import FoodItem from "./Components/FoodItem";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  let foodItems = ["Dal", "Vegetables", "Roti", "Salad", "Ghee"];
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div className="item-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>

      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItem items={foodItems} />
    </center>
  );
}
export default App;
