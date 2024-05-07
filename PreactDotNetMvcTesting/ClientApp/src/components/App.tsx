import preactLogo from '../assets/preact.svg';
import {useEffect, useState} from "preact/hooks";
import {TestDataModel} from "../models/TestDataModel";

interface AppProps {
    initcount: string;
    class: string;
}

export function App(props: AppProps) {
    console.log('App component props', props);
    if (props.initcount === undefined) {
        props.initcount = "0";
    }

    // State
    const [count, setCount] = useState(parseInt(props.initcount) || 0);
    const [data, setData] = useState<TestDataModel[]>([]);
    
    async function getApiData() {
        console.log('Fetching data...');
        const response = await fetch(`/api/MyApi?count=${count}`);
        if (!response.ok) {
            throw new Error(response.status.toString());
        }
        console.log('Data fetched!');
        setData(await response.json() as TestDataModel[]);
    }

    useEffect(() => {
        console.log('App component mounted');
        

        return () => {
            console.log('App component unmounted');
        };
    }, []);

    useEffect(() => {
        console.log('count updated', count);
        getApiData();
    }, [count]);
    
    return (
        <div class={props.class} style={{border: '2px red solid'}}>
            <p style={{color: 'red'}}>This is the App web component</p>
            <a href="https://preactjs.com" target="_blank">
                <img src={preactLogo} alt="Preact logo" height="160" width="160"/>
            </a>
            <h1>Get Started building Vite-powered Preact Apps </h1>
            {/*<section>*/}
            {/*    <Resource*/}
            {/*        title="Learn Preact"*/}
            {/*        description="If you're new to Preact, try the interactive tutorial to learn important concepts"*/}
            {/*        href="https://preactjs.com/tutorial"*/}
            {/*    />*/}
            {/*    <Resource*/}
            {/*        title="Differences to React"*/}
            {/*        description="If you're coming from React, you may want to check out our docs to see where Preact differs"*/}
            {/*        href="https://preactjs.com/guide/v10/differences-to-react"*/}
            {/*    />*/}
            {/*    <Resource*/}
            {/*        title="Learn Vite"*/}
            {/*        description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"*/}
            {/*        href="https://vitejs.dev"*/}
            {/*    />*/}
            {/*</section>*/}

            <ul className="custom-color">
                {data.length === 0 && <li>Loading...</li>}
                {data.map(item => <li>{item.summary} - {item.temperatureF}F - {new Date(item.date).toISOString()}</li>)}
            </ul>

            <div class="p-4">
                <button class="rounded bg-slate-500 p-3" onClick={() => setCount(count + 1)}>Click Me</button>
                <p>Button clicked {count} times.</p>
            </div>
        </div>
    );
}

function Resource(props) {
    return (
        <a href={props.href} target="_blank" class="resource">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </a>
    );
}