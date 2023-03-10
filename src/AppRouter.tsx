import { Spin } from 'antd';
import get from 'lodash/get';
import { lazy, Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './router/routes';

/**
 * Screens
 */
const HomeScreen = lazy(() => import(/* webpackChunkName: "HomeScreen" */ './pages/homepage/homeScreen'));
const LoginScreen = lazy(() => import(/* webpackChunkName: "LoginScreen" */ './pages/auth/loginScreen'));
const RegisterScreen = lazy(() => import(/* webpackChunkName: "RegisterScreen" */ './pages/auth/registerScreen'));
const ForgotScreen = lazy(() => import(/* webpackChunkName: "ForgotScreen" */ './pages/auth/forgotScreen'));
const OnboardingScreen = lazy(() => import(/* webpackChunkName: "OnboardingScreen" */ './pages/onboarding/onboardingScreen'));
const CollectionScreen = lazy(() => import(/* webpackChunkName: "Collection" */ './pages/collection/collection'));
const CollectionDetailsScreen = lazy(() => import(/* webpackChunkName: "CollectionDetails" */ './pages/collection/collectionDetails'));
const GroupsScreen = lazy(() => import(/* webpackChunkName: "groups" */ './pages/groups/groups'));
const GroupDetailScreen = lazy(() => import(/* webpackChunkName: "groupsDetails" */ './pages/groups/groupsDetails'));
const QuizScreen = lazy(() => import(/* webpackChunkName: "quiz" */ './pages/quiz/quiz'));
const PlannerScreen = lazy(() => import(/* webpackChunkName: "planner" */ './pages/planner/planner'));
const ChecklistScreen = lazy(() => import(/* webpackChunkName: "checklist" */ './pages/checklist/checklist'));
const ProfileScreen = lazy(() => import(/* webpackChunkName: "profile" */ './pages/profile/profile'));
const NotificationScreen = lazy(() => import(/* webpackChunkName: "notification" */ './pages/profile/notification'));
const SecurityScreen = lazy(() => import(/* webpackChunkName: "security" */ './pages/profile/security'));
const AccountDeleteScreen = lazy(() => import(/* webpackChunkName: "accountDelete" */ './pages/profile/accountDelete'));
const SharedWithMeScreen = lazy(() => import(/* webpackChunkName: "sharedWithMeScreen" */ './pages/sharedWithMe/sharedWithMeScreen'));
const SharedWithMeDetailScreen = lazy(() => import(/* webpackChunkName: "shareWithMeDetails" */ './pages/sharedWithMe/shareWithMeDetails'));
const GroupMembersScreen = lazy(() => import(/* webpackChunkName: "members" */ './pages/groups/members/'));
const ScoreDetailScreen = lazy(() => import(/* webpackChunkName: "scoreDetails" */ './pages/groups/scoreDetails/'));


const AppRouter = () => {
    const isLoggedIn = useSelector((state) => get(state, 'auth.isLoggedIn'));
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Spin spinning={isLoading}>
            <Suspense fallback={(<Spin spinning={true} />)} >
                <Router>
                    <Routes>
                        <Route path={ROUTES.HOME_SCREEN} element={<HomeScreen />} />
                        <Route path={ROUTES.LOGIN_SCREEN} element={<LoginScreen />} />
                        <Route path={ROUTES.SIGNUP_SCREEN} element={<RegisterScreen />} />
                        <Route path={ROUTES.FORGOT_SCREEN} element={<ForgotScreen/>} />
                        <Route path={ROUTES.ONBOARDING_SCREEN} element={<OnboardingScreen/>} />

                        {/* New flow here */}
                        <Route path={ROUTES.COLLECTION_SCREEN} element={<CollectionScreen/>} />
                        <Route path={ROUTES.COLLECTION_DETAILS_SCREEN} element={<CollectionDetailsScreen/>} />
                        <Route path={ROUTES.GROUPS_SCREEN} element={<GroupsScreen/>} />
                        <Route path={ROUTES.GROUPS_DETAIL_SCREEN} element={<GroupDetailScreen/>} />
                        <Route path={ROUTES.QUIZ_SCREEN} element={<QuizScreen/>} />
                        <Route path={ROUTES.PLANNER_SCREEN} element={<PlannerScreen/>} />
                        <Route path={ROUTES.CHECKLIST_SCREEN} element={<ChecklistScreen/>} />
                        <Route path={ROUTES.PROFILE_SCREEN} element={<ProfileScreen/>} />
                        <Route path={ROUTES.NOTIFICATION_SCREEN} element={<NotificationScreen/>} />
                        <Route path={ROUTES.SECURITY_SCREEN} element={<SecurityScreen/>} />
                        <Route path={ROUTES.ACCOUNT_DELETE_SCREEN} element={<AccountDeleteScreen/>} />
                        <Route path={ROUTES.SHARED_SCREEN} element={<SharedWithMeScreen/>} />
                        <Route path={ROUTES.SHARED_DETAILS_SCREEN} element={<SharedWithMeDetailScreen/>} />
                        <Route path={ROUTES.GROUP_MEMBERS_SCREEN} element={<GroupMembersScreen/>} />
                        <Route path={ROUTES.GROUP_SCORE_DETAILS_SCREEN} element={<ScoreDetailScreen/>} />

                    </Routes>
                </Router>
            </Suspense>
        </Spin>
    );
};

export default AppRouter;
