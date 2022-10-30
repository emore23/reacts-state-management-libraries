import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
  }

	a {
		font-weight: 500;
		color: #646cff;
		text-decoration: inherit;
	}

	a:hover {
		color: #535bf2;
	}

	h1 {
		font-size: 3.2em;
		line-height: 1.1;
	}

	button, input {
		border-radius: 8px;
		border: 1px solid transparent;
		padding: 0.6em 1.2em;
		font-size: 1em;
		font-weight: 500;
		font-family: inherit;
		background-color: #1a1a1a;
		cursor: pointer;
		transition: border-color 0.25s;
	}

	input:hover,
	button:hover {
		border-color: #646cff;
	}

	input:focus,
	button:focus,
	button:focus-visible {
		outline: 4px auto #646cff;
	}

  body {
		background-color: #242424;
    font-size: 14px;
    color: white;
    font-family: sans-serif, Inter;
  }
`;
