import React from 'react';
import EntityList from '@/modules/time/entity/_common/components/EntityList';
import {ACTIVITY_ENTITY, STREAM_ENTITY, TAG_ENTITY} from '@/modules/time/entity/entityMap';
import {useTranslation} from 'react-i18next';

const StreamsList = () => {
    const {t} = useTranslation();

    return <EntityList entityName={STREAM_ENTITY} title={t('time_tracing/streams')}/>
};

export default StreamsList;
