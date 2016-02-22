export const emailSubject = "Activate Your Fiscus Account";

export const emailTemplate = "															\
	<html>																				\
		<body>																			\
			<p>You're receiving this email because you created an account on Fiscus</p>	\
			<p>Click the following link to activate your account:</p>					\
			<p><a href='{{protocol}}://{{domain}}/{{uid}}/{{token}}'>Active</a></p>		\
			<p>Thanks for using Fiscus</p>												\
			<p>The Fiscus Team</p>														\
		</body>																			\
	</html>																				\
";