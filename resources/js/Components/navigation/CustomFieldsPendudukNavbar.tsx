import { CustomFieldsPendudukNavbarProps } from '@/interface/props';
import ActionBarButton from '../action/ActionBarButton';

export default function CustomFieldsPendudukNavbar({ nav, setNav, stateList, setStateList, setEditMode }: CustomFieldsPendudukNavbarProps) {
    const navOption = [{ label: 'Kecamatan' }, { label: 'Tahun' }, { label: 'Semester' }];
    return (
        <nav className="mb-2 flex w-full">
            <ul className="w-full basis-2/3 h-full flex space-x-2">
                {navOption.map((item, index) => {
                    return (
                        <li key={index}>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setNav(item.label);
                                }}
                                className={`text-sm ${nav == item.label ? 'bg-blue-500 hover:bg-blue-400 text-white' : 'text-blue-500 hover:text-blue-400 border-blue-500 bg-white hover:border-blue-400'} border-b border-r rounded-lg shadow font-medium h-full py-1 px-3`}
                            >
                                {item.label}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <ActionBarButton
                nav={nav}
                stateList={stateList}
                setStateList={setStateList}
                setEditMode={setEditMode}
            />
        </nav>
    );
}
