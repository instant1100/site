import React from 'react';
import EntityList from '@/modules/time/entity/_common/components/EntityList';
import {TAG_ENTITY} from '@/modules/time/entity/entityMap';
import {useTranslation} from 'react-i18next';

const TagsList = () => {
    const {t} = useTranslation();

    return <EntityList entityName={TAG_ENTITY} title={t('time_tracing/tags')}/>
};

export default TagsList;
