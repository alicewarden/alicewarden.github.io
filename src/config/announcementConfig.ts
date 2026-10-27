import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题，留空则走i18n默认标题
	title: "欢迎来访",

	// 公告内容
	content: "这里记录学习、技术和生活。愿每一次尝试，都留下值得回看的文字。",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "认识 Alice",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
