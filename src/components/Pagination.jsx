


const Pagination = ({ postPerPg, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPg); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>

            {pageNumbers.map((number) => (
                <button onClick={() => {paginate(number)}} id={number}>{number}</button>))}

        </div>
    )
}

export default Pagination
