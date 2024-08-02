import { render, screen } from '@testing-library/react';
import Sample2 from '../../src/Components/Sample2';
import { MemoryRouter } from 'react-router-dom'; 
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';


describe("Sample2", () => {

    it("should check rendering and heading content", () => {
        render(
            <MemoryRouter>
                <Sample2 />
            </MemoryRouter>
        );

        const pageHeader = screen.getByText("Hello");
        expect(pageHeader).toBeInTheDocument();
    });

    it("should get content by fetching id", () => {
        render(
            <MemoryRouter>
                <Sample2 />
            </MemoryRouter>
        );
        expect(screen.getByTestId("span")).toHaveTextContent(0)
    });

    it("should check user interactive handling", async () => {
        const user = userEvent.setup();
        
        render(
            <MemoryRouter>
                <Sample2 />
            </MemoryRouter>
        );

        const beforeIncrement = screen.getByTestId("span");
        expect(beforeIncrement).toHaveTextContent(0);

        const submitButton = screen.getByRole("button");
        await user.click(submitButton);

        const afterIncrement = screen.getByTestId("span");
        expect(afterIncrement).toHaveTextContent(1);

        const input = screen.getByRole("textbox");
        await user.type(input, "10");
        expect(input).toHaveValue("10");
    });
});
