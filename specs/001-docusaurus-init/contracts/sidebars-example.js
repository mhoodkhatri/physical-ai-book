/**
 * Physical AI & Humanoid Robotics Textbook
 * Sidebar Configuration Contract
 *
 * This file defines the expected sidebar structure per spec requirements.
 * The actual sidebars.js should match this structure.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      link: {
        type: 'doc',
        id: 'module-1-ros2/index',
      },
      collapsed: false,
      items: [
        'module-1-ros2/01-nodes-topics',
        'module-1-ros2/02-services-actions',
        'module-1-ros2/03-rclpy',
        'module-1-ros2/04-urdf',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      link: {
        type: 'doc',
        id: 'module-2-simulation/index',
      },
      collapsed: true,
      items: [
        'module-2-simulation/01-gazebo-basics',
        'module-2-simulation/02-physics-sim',
        'module-2-simulation/03-unity-integration',
        'module-2-simulation/04-sensors',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac)',
      link: {
        type: 'doc',
        id: 'module-3-nvidia-isaac/index',
      },
      collapsed: true,
      items: [
        'module-3-nvidia-isaac/01-isaac-sim',
        'module-3-nvidia-isaac/02-isaac-ros',
        'module-3-nvidia-isaac/03-vslam',
        'module-3-nvidia-isaac/04-nav2',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      link: {
        type: 'doc',
        id: 'module-4-vla/index',
      },
      collapsed: true,
      items: [
        'module-4-vla/01-whisper',
        'module-4-vla/02-cognitive-planning',
        'module-4-vla/03-capstone',
      ],
    },
    {
      type: 'category',
      label: 'Hardware Specifications',
      link: {
        type: 'doc',
        id: 'hardware/index',
      },
      collapsed: true,
      items: [
        'hardware/workstation',
        'hardware/edge-kit',
      ],
    },
    {
      type: 'category',
      label: 'Appendix',
      link: {
        type: 'doc',
        id: 'appendix/index',
      },
      collapsed: true,
      items: [
        'appendix/assessments',
        'appendix/resources',
      ],
    },
  ],
};

export default sidebars;
