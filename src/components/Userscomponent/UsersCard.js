import React, { useState } from 'react'
import CustomButton from '../custom-button/CustomButton'
import SearchInput from '../searchinput/Searchinput'
import './Userscard.scss'
import { ReactComponent as FilterIcon } from '../../images/filter.svg'

const EachUser = ({ name, gender, email, index, picture }) => {
    return (
        <div className='eachuser' style={(index + 1) % 2 === 0 ? { background: '#F5F5F5' } : { background: '  #EDEDED' }}>
            <img src={picture.thumbnail} alt='userdp' />
            <p style={{
                display: 'flex',
                justifyContent: 'right'
            }}>{name.first} {" "}{name.last}</p>
            <span>{email}</span>
            <span>{gender}</span>
            {
                index == 0 ? <span>Admin</span> : <span>User</span>
            }
        </div>
    )
}


const UsersCard = ({ data, pageLimit, dataLimit }) => {
    const [filteredData, setFilteredData] = useState(data)
    const [searchField, setSearchField] = useState('')
    const [pages, setPages] = useState(Math.round(filteredData.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    const handleSearchChange = e => {
        setSearchField(e.target.value);
        if (!e.target.value || e.target.value.length < 1) {
            setFilteredData(data)
            setPages(Math.round(filteredData.length / dataLimit))
        }
    };

    const filterPeople = () => {
        const filteredPeople = data.filter(person => {
            const email = person.email
            const name = person.name.first + person.name.last
            return email.toLowerCase().includes(searchField.toLowerCase())
                || name.trim().toLowerCase().includes(searchField.trim().toLowerCase())
        })
        setFilteredData(filteredPeople)

    }
    const onSearchSubmit = e => {
        e.preventDefault()
        filterPeople()


    }
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return filteredData.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    return (
        <div className='userscard'>
            <div className='userscard-header'>
                <h2>Users Records</h2>
                <div className='userscard-header__right'>
                    <SearchInput onChange={handleSearchChange} />
                    <CustomButton filterbutton="true" onClick={onSearchSubmit}> <FilterIcon /> {" "}
                        Filter</CustomButton>
                    <CustomButton> + {" "}  {" "} Add</CustomButton>
                </div>
            </div>
            {
                getPaginatedData().map((props, index) => {
                    return <EachUser key={index} {...props} index={index} />
                })
            }
            <div className="pagination">
                <span onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                    disabled={currentPage === 1}>&#8249;</span>

                {/* show page numbers */}
                {getPaginationGroup().map((item, index) => (
                    <span
                        key={index}
                        onClick={changePage}
                        className={`pagination-number  ${currentPage === pages ? 'disabled' : ''} ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </span>
                ))}

                {/* next button */}
                <span
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    &#8250;
                </span>
                yesy
            </div>

        </div>
    )
}

export default UsersCard