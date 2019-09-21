import React from "react";
import { render, fireEvent } from "react-native-testing-library";
import { TextInput } from "react-native";
import TextInputItem from "./index";
describe(" testing the textinputItem component", () => {
  it("should test the call back of index and testing the access of element by ref ", () => {
    const mockFn = jest.fn();
    const mockFnBackspace = jest.fn();

    const textInputRef = React.createRef();
    const { getByType } = render(
      <TextInputItem
        onEnterLetter={mockFn}
        onPressBackspace={mockFnBackspace}
        ref={textInputRef}
        index={0}
      />
    );
    const element = getByType(TextInput);
    textInputRef.current.onFocus();
    console.log(textInputRef.current);
    fireEvent.changeText(element, "p");
    expect(mockFn).toHaveBeenCalledWith(0);
    console.log(textInputRef);
    expect(textInputRef.current.inputText).toBe("P");
  });
});
