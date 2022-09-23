import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from "../AddInput"

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
	describe("test case of input", () => {
		// cacs case có thể xảy ra với input
	})

	describe("test case of button", () => {
		// cacs case có thể xảy ra với button
	})

    it('should render input element', () => {
        const { getByPlaceholderText } = render(
            <AddInput 
                todos={['1', '2']}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type into input', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
        expect(inputElement.value).toBe("Go Grocery Shopping");
    });

    it('should be able to type into add input', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
        const buttonElement = screen.getByRole("button", { name: /Add/i});
        fireEvent.click(buttonElement)
        expect(mockedSetTodo).toBeCalled()
    });
    
    it('should have empty input when add button is cliked', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
        const buttonElement = screen.getByRole("button", { name: /Add/i});
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("")
    });
})