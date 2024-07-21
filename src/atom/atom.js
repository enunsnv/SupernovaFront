import { atom, selector } from 'recoil';

// 아톰 생성
export const userIDState = atom({
    key: 'userIDState',
    default: '',
    effects_UNSTABLE: [
        ({ setSelf, onSet }) => {
            //컴포넌트가 로드될 때 로컬 스토리지에서 값 가져오기
            const savedValue = localStorage.getItem('userID');
            if (savedValue != null) {
                setSelf(savedValue);
            }

            //값이 변경될 때 로컬 스토리지에 저장
            onSet(newValue => {
                if (newValue != null) {
                    localStorage.setItem('userID', newValue);
                } else {
                    localStorage.removeItem('userID');
                }
            });
        }
    ]
});

export const emptyTimeState = atom({
    key: 'emptyTimeState',
    default: 0,
});

export const timeTableState = atom({
    key: 'timeTableState',
    default: [],
});
