import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC
} from "../../redux/users-reducer";
import Users from "./Users";
import preLoader from '../../assets/Loader.gif'
import Preloader from "../../common/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);

        //getting data in api.js file
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         users={this.props.users}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//
//         setIsFetching: (isFetching) =>{
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// }
export default connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setUsersTotalCountAC,
    setIsFetching: setIsFetchingAC

})(UsersContainer)