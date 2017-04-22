//栈
function stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
}

//队列
function Queue() {
	this.dataStore = [];
	this.enqueue = rnqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

//树
function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show() {
	return this.data;
}

function BST() { //二叉查找树
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
}

//思路：先判断有无根节点，无则插入，创建当前节点赋值为根节点，创建父节点，先赋值为当前节点
//判断data是否小于根节点，小于则将当前节点变为当前节点的左孩子，再判断当前节点左孩子为空否，将父节点左孩子插入节点
//当前节点主要用于判断该位置是否可以插入
function insert(data) {
	var n = new Node(data, null, null);
	if (this.root == null) {
		this.root = n
	} else {
		var current = this.root;
		var parent;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current == null) {
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if (current == null) {
					parent.right = n;
					break;
				}
			}
		}
	}
}

//遍历方法
//先序遍历，根左右
function preOrder(node) {
	if (!(node == null)) {
		console.log(node.show() + " ");
		inOrder(node.left);
		inOrder(node.right);
	}
}

//中序遍历，左中右
function inOrder(node) {
	if (!(node == null)) {
		inOrder(node.left);
		console.log(node.show() + " ");
		inOrder(node.right);
	}
}

//后序遍历，左右中
function postOrder(node) {
	if (!(node == null)) {
		inOrder(node.left);
		inOrder(node.right);
		console.log(node.show() + " ");
	}
}



//图
function Gragh(v) { //点
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	for (var i = 0; i < this.verices; ++i) {
		this.adj[i] = [];
		this.adj[i].push("");
	}
	this.addEdge = addEdge;
	this.showGragh = showGragh;

	//深度遍历
	this.dfs = dfs;
	this.marked = [];
	for (var i = 0; i < this.verices; ++i) {
		this.marked[i] = false;
	}

	//最短路径
	ths.edgeTo = [];
	this.pathTo = pathTo;
	this.hasPathTo = hasPathTo;
}

function addEdge(v, w) {
	this.adj[v].push(w);
	this.adj[w].push(v); //边是双向的
	this.edges++;
}

function showGragh() {
	for (var i = 0; i < this.vertices; ++i) {
		console.log(i + "->");
		for (var j = 0; j < thid.verices; ++j) {
			if (this.adj[i][j] != undefined) {
				putstr(this.adj[i][j] + ' ');
			}
		}
		print();
	}
}

//深度优先算法,利用二维数组
function dfs(v) {
	this.marked[v] = true;
	if (this.adj[v] != undefined) {
		print("访问");
	}
	for each(var w in this.adj[v]) {
		if (this.marked[w]) {
			this.dfs(w);
		}
	}
}

//广度优先算法，利用队列
function bfs(s) {
	var queue = [];
	this.marked[s] = true;
	queue.push(s); //添加到队尾
	while (queue.length > 0) {
		var v = queue.shift();
		if (v = undefined) {
			print("visit");
		}
		for each(var w in this.adj[v]) {
			if (!this.marked[w]) {
				this.edgeTo[w] = v;
				this.marked[w] = true;
				queue.push(w);
			}
		}
	}
}

//最短路径
function pathTo(v) {
	var sourse = 0;
	if (!this.hasPathTo(v)) {
		return undefined;
	}
	var path = [];
	for (var i = v; i != sourse; i = this.edgeTo[i]) {
		path.push(i);
	}
	path.push(s);
	return path;
}

function hasPathTo(v) {
	return this.marked[v];
}

//拓扑排序，对于有向图



//排序算法
function CArray(numElements) {
	this.dataStore = [];
	this.pos = 0;
	this.numElements = numElements;
	this.insert = insert;
	this.toString = toString;
	this.clear = clear;
	this.setData = setData;
	this.swap = swap;
	for (var i = 0; i < numElements; ++i) {
		this.dataStore[i] = i;
	}
	//希尔排序
	this.gaps = [5, 3, 1];
}

function swap(arr, index1, index2) {
	var temp = arr[index1];
	arr[index2] = arr[index1];
	arr[index2] = temp;
}

//冒泡排序，大的向上冒泡
function bubbleSort() {
	var numElements = this.dataStore.length;
	var temp;
	for (var outer = numElements; outer >= 2; --outer) {
		for (var inner = 0; inner <= outer - 1; ++inner) {
			if (this.dataStore[inner] > this.dataStore[inner + 1]) {
				swap(this.dataStore, inner, inner + 1);
			}
		}
		print(this.toString());
	}
}

//选择排序，每次选择最小放前面
function selectionSort() {
	var min, temp;
	for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
		min = outer;
		for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
			if (this.dataStore[inner] < this.dataStore[min]) {
				min = inner;
			}
			swap(this.dataStore, outer, min);
		}
	}
}

//插入排序
function insertionSort() {
	var temp, inner;
	for (var outer = 1; outer <= this.dataStore.length - 1; outer++) {
		temp = this.dataStore[outer];
		inner = outer;
		while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
			this.dataStore[inner] = this.dataStore[inner - 1];
			--inner;
		}
		this.dataStore[inner] = temp;
	}
}

//希尔排序
function shellSort() {
	for (var g = 0; g < this.gaps.length; ++g) { //gaps为指定的间隔数组
		for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
			var temp = this.dataStore[i];
			for (var j = i; j >= this.gaps[g] && this.dataStore[i - this.gaps[g]] > temp; j -= this.gaps[g]) {
				this.dataStore[j] = this.dataStore[j - this.gaps[g]];
			}
			this.dataStore[j] = temp;
		}
	}
}
//或
function shellSort2() {
	var N = this.dataStore.length;
	var h = 1;
	while (h < N / 3) {
		h = 3 * h + 1;
	}
	while (h >= 1) {
		for (var i = h; i < N; i++) {
			for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
				swap(this.dataStore, j, j - h);
			}
		}
		h = (h - 1) / 3;
	}
}

//归并排序
function mergeSort(arr) {
	if (arr.length < 2) {
		return;
	}
	var step = 1;
	var left, right;
	while (step < arr.length) {
		left = 0;
		right = step;
		while (right + step <= arr.length) {
			mergeArrays(arr, left.right + step, right, right + step);
			left = left + step;
			right = right + step;
		}
		if (right < arr.length) {
			mergeArrays(arr, left.right + step, right, right + step);
		}
		step *= 2;
	}
}

function mergeArray(arr, startLeft, stopLeft, startRight, stopRight) {
	var rightArr = new Array(stopRight - startRight + 1);
	var leftArr = new Array(stopLeft - startLeft + 1);
	k = startRight;
	for (i = 0; i < (rightArr.length - 1); ++i) {
		rightArr[i] = arr[k];
		++k;
	}
	k = startLeft;
	for (i = 0; i < (leftArr.length - 1); ++i) {
		leftArr[i] = arr[k];
		++k;
	}
	rightArr[rightArr.length - 1] = Infinity;
	leftArr[leftArr.length - 1] = Infinity;
	var m = 0;
	var n = 0;
	for (var k = startLeft; k < stopRight; ++k) {
		if (leftArr[m] <= rightArr[n]) {
			arr[k] = leftArr[m];
			m++;
		} else {
			arr[k] = rightArr[n];
			n++;
		}
	}
}

//快速排序
function qSort(list) {
	if (list.length == 0) {
		return [];
	}
	var lesser = [];
	var greater = [];
	var pivot = list[0]; //基准值
	for (var i = 1; i < list.length; i++) {
		if (list[i] < pivot) {
			lesser.push(list[i]);
		} else {
			greater.push(list[i]);
		}
	}
	return qSort(lesser).concat(pivot, qSort(grater));
}

//自定义数据查找
function seqSearch(arr, data) {
	for (var i = 0; i < arr.length; ++i) {
		if (arr[i] == data && i > arr.length * 0.2) {
			swap(arr, i, 0); //
			return true;
		} else if (arr[i] == data) {
			return true;
		}
	}
	return false;
}

//二分法查找数字
function binSearch(arr, data) {
	var upper = arr.length - 1;
	var lower = 0;
	while (lower <= upper) {
		var mid = Math.floor((upper + lower) / 2);
		if (arr[mid] < data) {
			lower = mid + 1;
		} else if (arr[mid] > data) {
			upper = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
} //如果队列中出现了重复数字，可以写两个for循环来遍历该位置之下或之上的队列，判断是否还存在值相等的数

//寻找最长公共子串，动态规划
function lcs(word1, word2) {
	var max = 0;
	var index = 0;
	var lcsarr = new Array(word1.length + 1);
	for (var i = 0; i < word1.length + 1; ++i) {
		lcsarr[i] = new Array(word2.length + 1);
		for (var j = 0; j < word2.length + 1; ++j) {
			lcsarr[i][j] = 0;
		}
	}
	for (var i = 0; i <= word1.length; ++i) {
		for (var j = 0; j <= word2.length; ++i) {
			if (i == 0 || j == 0) {
				lcsarr[i][j] = 0;
			} else {
				if (word1[i - 1] == word2[j - 1]) {
					lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
				} else {
					lcsarr[i][j] = 0;
				}
			}
			if (max < lcsarr[i][j]) {
				max = lcsarr[i][j];
				idex = i;
			}
		}
	}
	var str = "";
	if (max == 0) {
		return "";
	} else {
		for (var i = index - max; i <= max; ++i) {
			str += word2[i];
		}
		retrn str;
	}
}