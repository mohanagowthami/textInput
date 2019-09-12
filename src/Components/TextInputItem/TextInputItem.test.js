import React from "react";
import { render, fireEvent } from "react-native-testing-library";
import { TextInput } from "react-native";
import TextInputItem from "./index";
describe(" testing call back with user input in text input", () => {
  it("should test the call back of user input and ref", () => {
    const mockFn = jest.fn();
    const mockFnRef = jest.fn();
    const textInputRef = React.createRef();
    const { getByType } = render(
      <TextInputItem
        onSubmitUserText={mockFn}
        onSubmitRef={mockFnRef}
        refInput={textInputRef}
      />
    );
    const element = getByType(TextInput);
    fireEvent.changeText(element, "k");
    expect(mockFn).toHaveBeenCalledWith("k");
    expect(mockFnRef).toHaveBeenCalledWith(textInputRef);
  });
});
