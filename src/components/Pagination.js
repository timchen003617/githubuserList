import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        boxSizing: 'border-box',
        height: '30px'
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderShortHand: {
        borderTop: '1px solid black',
        borderRight: '1px solid black',
        borderBottom: '1px solid black'
    },
    hoverEle: {
        '&:hover': {
            cursor: 'pointer',
            background: 'rgba(87,89,120,1)',
            color: 'white'
        }
    },
    wrapper: {
        width: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    firstPage: {
        padding: '0 5px',
        height: '100%'
    },
    nextPrevPage: {
        padding: '0 10px',
        fontSize: '14px',
        height: '100%'
    },
    page: {
        fontSize: '20px',
        color: 'white',
        background: 'black'
    },
    pageNum: {
        minWidth: '30px',
        padding: '0 5px',
        fontSize: '14px',
        height: '100%'
    }
}))

const Pagination = props => {
    const classes = useStyles()
    const { currentPage, setCurrentPage, perpage, dataLength, handleNextPage, handlePrevPage, handleJumpPage } = props
    let pages = []
    const firstPage = 1
    const lastPage = Math.ceil(dataLength / perpage) || 1
    
    for (let i = firstPage; i <= lastPage; i++) {
        pages.push(
            <div
                key={i}
                className={clsx(
                    classes.flexCenter,
                    classes.pageNum,
                    classes.borderShortHand,
                    classes.hoverEle,
                    {
                        [classes.page]: i === currentPage
                    }
                )}
                onClick={handleJumpPage(i, setCurrentPage)}
            >
                {i}
            </div>
        )
    }

    return (
        <div className={clsx(classes.root, classes.wrapper, classes.flexCenter)}>
            <div className={clsx(classes.flexCenter)}>
                共 {dataLength} 筆
            </div>
            <div
                className={clsx(
                    classes.flexCenter,
                    classes.nextPrevPage,
                    classes.hoverEle,
                    classes.borderShortHand
                )}
                onClick={handlePrevPage(currentPage, setCurrentPage)}
            >
                {'<<'}
            </div>
            {pages}
            <div
                className={clsx(
                    classes.flexCenter,
                    classes.nextPrevPage,
                    classes.hoverEle,
                    classes.borderShortHand
                )}
                onClick={handleNextPage(currentPage, lastPage, setCurrentPage)}
            >
                {'>>'}
            </div>
        </div>
    )

}

Pagination.propTypes = {
    currentpage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
    perpage: PropTypes.number.isRequired,
    dataLength: PropTypes.number.isRequired,
    handleNextPage: PropTypes.func.isRequired,
    handlePrevPage: PropTypes.func.isRequired,
    handleJumpPage: PropTypes.func.isRequired
}

export default Pagination