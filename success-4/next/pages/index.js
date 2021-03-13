import React from 'react';

const Test = () => {
    return <div>
        This will fail.
    </div>
}

Test.getInitialProps = async () => {
    return { someVal: true };
};

export default Test;
