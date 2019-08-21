import * as React from 'react';

interface TextElementProps {
    text: string;
}

const TextElement: React.SFC<TextElementProps> = (props) => {
    return (
        <div className="textElement">
            <p>{props.text}</p>
        </div>
    )
}

export default TextElement;