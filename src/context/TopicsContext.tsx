import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

export type TTopics = {
    html: boolean;
    css: boolean;
    javascript: boolean;
    react: boolean;
    other: boolean;
};

type TTopicsContext = {
    topics: TTopics,
    toggleTopic: (topic: keyof TTopics) => void;
}

const TopicsContext = createContext<TTopicsContext>(
    {
        topics: {
            html: false,
            css: false,
            javascript: false,
            react: false,
            other: false,
        },
        toggleTopic: () => {},
    }
);

type TTopicsProviderProps = {
    children: ReactNode;
};

export function TopicsProvider({ children }: TTopicsProviderProps) {
    const [topics, setTopics] = useState<TTopicsContext["topics"]>({
        html: true,
        css: false,
        javascript: false,
        react: false,
        other: false,
    });

    useEffect(() => {
        const storedTopics = localStorage.getItem("topics");
        if (storedTopics) {
            setTopics(JSON.parse(storedTopics));
        } else {
            localStorage.setItem("topics", JSON.stringify(topics));
        }
    }, []);

    const toggleTopic = (topic: keyof TTopics) => {
        setTopics((prevTopics) => {
            const newTopics = { ...prevTopics, [topic]: !prevTopics[topic] };
            localStorage.setItem("topics", JSON.stringify(newTopics));
            return newTopics;
        });
    };

    return (
        <TopicsContext.Provider value={{ topics, toggleTopic }}>
            {children}
        </TopicsContext.Provider>
    );
}

export const useTopics = () => useContext(TopicsContext);