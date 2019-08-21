import * as React from 'react';

interface TextBoxProps {
    text: string;
}

const TextBox: React.SFC<TextBoxProps> = (props) => {
    return (
        <div className="textElement">
            <p>{props.text}</p>
        </div>
    )
}

export default TextBox