import React from 'react';
import {connect} from "react-redux";
import {
    follow, unfollow,
    requestUsers, setCurrentPageAC,
    toggleFollowingProgress
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        const {getUsers, currentPage, pageSize} = this.props;
        getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {getUsers, pageSize} = this.props;
        getUsers(pageNumber, pageSize);
    }

    render() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
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
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage: setCurrentPageAC,
        toggleFollowingProgress,
        getUsers: requestUsers
    })
)(UsersContainer)