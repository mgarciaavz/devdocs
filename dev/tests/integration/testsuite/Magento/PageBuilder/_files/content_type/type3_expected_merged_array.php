<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

declare(strict_types=1);

return [
    'types' => [
        'type3' => [
            'sortOrder' => '3',
            'label' => 'Custom Type 3',
            'icon' => 'pagebuilder-type3-icon',
            'component' => 'Path/to/custom/component',
            'form' => 'pagebuilder_type3_form',
            'group' => 'group1',
            'allowed_parents' => [
                0 => 'stage'
            ],
            'appearances' => [
                'default' => [
                    'preview_template' => 'Path/to/preview/template',
                    'render_template' => 'Path/to/render/template',
                    'readers' => [],
                    'data_mapping' => [
                        'elements' => [
                            'main' => [
                                'style' => [
                                    0 =>[
                                        'var' => 'style_converter',
                                        'name' => 'converter',
                                        'converter' => 'Path/to/converter',
                                        'preview_converter' => null,
                                        'persistence_mode' => 'readwrite',
                                        'reader' => 'Magento_PageBuilder/js/property/style-property-reader'
                                    ],
                                    1 => [
                                        'var' => 'style_no_converter',
                                        'name' => 'no_converter',
                                        'converter' => null,
                                        'preview_converter' => null,
                                        'persistence_mode' => 'readwrite',
                                        'reader' => 'Magento_PageBuilder/js/property/style-property-reader'
                                    ]
                                ],
                                'attributes' => [
                                    0 => [
                                        'var' => 'name',
                                        'name' => 'data-role',
                                        'converter' => null,
                                        'persistence_mode' => 'readwrite',
                                        'preview_converter' => null,
                                        'reader' => 'Magento_PageBuilder/js/property/element-attribute-reader'
                                    ]
                                ],
                                'tag' => [],
                                'html' => [],
                                'css' => [
                                    'var' => 'css_classes',
                                    'converter' => null,
                                    'filter' => [],
                                ],
                            ],
                        ],
                        'converters' => []
                    ],
                    'default' => 'true',
                    'reader' => 'Path/to/reader'
                ]
            ],
            'name' => 'type3',
            'translate' => 'label'
        ]
    ]
];
