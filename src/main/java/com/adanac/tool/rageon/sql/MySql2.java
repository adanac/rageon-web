package com.adanac.tool.rageon.sql;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

/**
 * 使用PreparedStatement替代Statement可以防止SQL注入
 */
public class MySql2 {

	// 定义执行语句
	public PreparedStatement prestmt = null;

	// 创建数据库连接
	public Connection getConn() {
		Connection conn = null;
		try {
			conn = JdbcConnection.getConnection();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}

	// 执行完关闭数据库连接
	public void closeConn(Connection conn) {
		try {
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	/**
	 * 创建一个插入数据的方法  executeUpdate()
	 * @param insertSQl
	 */
	public void datatoMySql(Connection conn, String insertSQl) {

		try {

			// 创建一个 Statement 对象来将 SQL 语句发送到数据库
			prestmt = conn.prepareStatement(insertSQl);
			// 执行SQL 插入语句
			prestmt.executeUpdate(insertSQl);
			// 执行完 停止执行语句
			prestmt.close();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
	}

	/**
	 * 创建一个用于select查看数据的方法 executeQuery();
	 * @param strSelect
	 * @return ResultSet
	 */
	public ResultSet queryMySql(Connection conn, String username, String pwd) {
		// 创建一个数据集 用于获取查询到的行数据
		ResultSet rs = null;
		try {
			// 创建一个 Statement 对象来将 SQL 语句发送到数据库
			String sql = "SELECT * FROM tab3 where name=? and pass=?";
			prestmt = conn.prepareStatement(sql);
			prestmt.setString(1, username);
			prestmt.setString(2, pwd);
			// 执行查询语句 获取ResultSet对象
			rs = prestmt.executeQuery();
			showResultSet(rs);
			rs.close();

		} catch (SQLException e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		// 返回结果集
		return rs;
	}

	/**
	 * 模糊查询
	 * @param strSelect
	 * @return ResultSet
	 */
	public ResultSet queryMySql2(Connection conn, String username) {
		// 创建一个数据集 用于获取查询到的行数据
		ResultSet rs = null;
		try {
			// 创建一个 Statement 对象来将 SQL 语句发送到数据库
			prestmt = conn.prepareStatement("select * from tab3 where name like ?");
			prestmt.setString(1, "%" + username + "%");
			// 执行查询语句 获取ResultSet对象
			rs = prestmt.executeQuery();
			showResultSet(rs);
			rs.close();

		} catch (SQLException e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		// 返回结果集
		return rs;
	}

	/**
	 * in 查询
	 * @param strSelect
	 * @return ResultSet
	 */
	public ResultSet queryMySql3(Connection conn, String username1, String username2) {
		// 创建一个数据集 用于获取查询到的行数据
		ResultSet rs = null;
		try {
			// 创建一个 Statement 对象来将 SQL 语句发送到数据库
			prestmt = conn.prepareStatement("select * from tab3 where name in(?,?)");
			prestmt.setString(1, username1);
			prestmt.setString(2, username2);
			// 执行查询语句 获取ResultSet对象
			rs = prestmt.executeQuery();
			showResultSet(rs);
			rs.close();

		} catch (SQLException e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		// 返回结果集
		return rs;
	}

	public void showResultSet(ResultSet rs) throws SQLException {
		ResultSetMetaData meta = rs.getMetaData();
		StringBuffer sb = new StringBuffer();
		int colCount = meta.getColumnCount();
		for (int i = 1; i <= colCount; i++) {
			sb.append(meta.getColumnName(i)).append("[").append(meta.getColumnTypeName(i)).append("]").append("\t");
		}
		while (rs.next()) {
			sb.append("\r\n");
			for (int i = 1; i <= colCount; i++) {
				sb.append(rs.getString(i)).append("\t");
			}
		}
		// 关闭ResultSet
		rs.close();
		System.out.println(sb.toString());
	}

	public static void main(String[] args) {
		MySql2 mysql = new MySql2();
		Connection conn = mysql.getConn();
		// String insertSQl = "insert into tab1 (url,title,content)
		// values('baidu.com','db','this is baidu')";
		// insertSQl = "insert into tab3(name,pass,age) values
		// ('u1','pwd1',20)";
		// mysql.datatoMySql(conn, insertSQl);
		//
		// mysql.queryMySql(conn, "u1", "pwd");
		// mysql.queryMySql2(conn, "tig");
		mysql.queryMySql3(conn, "u2", "tiger");
	}
}