




const FriendsRefactored =()=>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
      pages.push(i)
    }

    return (
        <div>
            <div className={classes.paginator}>
                {pages.map (p=> 
                    <span 
                        data-page={p}
                        className={props.currentPage == p ? classes.selectedPage:classes.page}
                        onClick={()=> props.onPageChanged(p)}
                    >
                    {p}&nbsp;
                    </span>
                )}
            </div>
        </div>
    )
}


export default FriendsRefactored;
