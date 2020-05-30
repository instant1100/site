import React from 'react';
import EntityList from '@/modules/time/entity/_common/components/EntityList';
import {ACTIVITY_ENTITY, TAG_ENTITY} from '@/modules/time/entity/entityMap';
import {useTranslation} from 'react-i18next';

const ActivitiesList = () => {
    const {t} = useTranslation();

    return <EntityList entityName={ACTIVITY_ENTITY} title={t('time_tracing/activities')}/>
};

export default ActivitiesList;
