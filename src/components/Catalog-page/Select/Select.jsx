import { useEffect, useState } from 'react';

import './Select.scss'

const CustomSelect = ({ options, onChange, value }) => {
    const [isOpen, setIsOpen] = useState(false);
    let [containsNumbers, setContainsNumbers] = useState(null);
    let [items, setItems] = useState(null);

    const toggleSelect = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        onChange(option);
        setIsOpen(false);
    };


    useEffect(() => {
        options.flat().some(item => item == 'all') ? setContainsNumbers(containsNumbers = false) : setContainsNumbers(containsNumbers = true);
        containsNumbers
            ? setItems(items = options.map((option, index) => (
                <li key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                </li>
            )))
            : setItems(items = options.map((option, index) => (
                <li key={index} onClick={() => handleOptionClick(option)}>
                    {option[1]}
                </li>
            )))

    }, [containsNumbers])

    return (
        <div className="custom-select">
            <div className={`select-header ${isOpen ? 'open' : ''}`} onClick={toggleSelect}>
                {typeof value == 'string' ? value : value[1]}
                <i className={`arrow ${isOpen ? 'open' : ''}`}></i>
            </div>
            {isOpen && (
                <ul className="select-options">
                    {items}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
